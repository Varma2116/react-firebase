import React from "react";

const Home = (props) => {
  const { handleLogout } = props;
  return <button onClick={handleLogout}>Log out</button>;
};
export default Home;
