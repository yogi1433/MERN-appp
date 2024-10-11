import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link to="/register">
        {" "}
        <button>signup</button>
      </Link>
      <Link to="/login">
        {" "}
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;
