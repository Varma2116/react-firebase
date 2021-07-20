import React from "react";

const Login = (props) => {
  const {
    email,
    password,
    confirmPassword,
    emailError,
    passwordError,
    confirmPasswordError,
    hasAccount,
    loginHandler,
    signupHandler,
    setEmail,
    setPassword,
    setConfirmPassword,
    setHasAccount,
  } = props;
  return (
    <div>
      <div>
        <label>User Name: </label>
        <input
          type="email"
          name="email"
          value={email}
          autoComplete="off"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{emailError}</p>
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{passwordError}</p>
      </div>
      <div>
        {hasAccount ? (
          <>
            <button type="button" onClick={loginHandler}>
              Sign in
            </button>
            <p>
              Don't have Account ?{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setHasAccount(!hasAccount)}
              >
                singn up
              </span>
            </p>
          </>
        ) : (
          <>
            <div>
              <label>Confirm Password: </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p>{confirmPasswordError}</p>
            </div>
            <button type="button" onClick={signupHandler}>
              Sing up
            </button>
            <p>
              Have a account ?{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setHasAccount(!hasAccount)}
              >
                singn in
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
