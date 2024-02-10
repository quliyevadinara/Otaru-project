import React, { useContext } from "react";
import Register from "../components/Register";
import { UserContext } from "../App";

const RegisterPage = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="login-page">
      <div className="login-container">
        <Register />
      </div>
    </div>
  );
};

export default RegisterPage;
