import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../Redux/Actions/LoginAction";
import Home from "../ReduxComponents/Home";
import Login from "../ReduxComponents/Login";
import fireBase from "./FireBase";
const UserAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);

  const userData = useSelector(state => state.userData);
  const dispatch = useDispatch();

  const signupHandler = () => {
    if (password === confirmPassword) {
      fireBase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        });
    } else {
      setConfirmPasswordError("password doesn't match");
    }
  };

  const handleLogout = () => {
    fireBase.auth().signOut();
  };

  const loginHandler = () => {
    clearErrors();
    fireBase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const authListener = () => {
    clearErrors();
    clearInputs();
    fireBase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        dispatch(setUserData(user));
      } else {
        dispatch(setUserData(null));
      }
    });
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      {userData ? (
        <Home handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          emailError={emailError}
          passwordError={passwordError}
          confirmPasswordError={confirmPasswordError}
          hasAccount={hasAccount}
          loginHandler={loginHandler}
          signupHandler={signupHandler}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          setHasAccount={setHasAccount}
        />
      )}
    </>
  );
};
export default UserAuth;
