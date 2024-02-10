import React, { useContext } from "react";
import Login from "../components/Login";
import { AccountDataContext } from "../App";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <Login />
      </div>
      
    </div>
  );
};

export default LoginPage;
