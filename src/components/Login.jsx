import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { supabase } from "../supabase/client";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AccountDataContext, UserContext } from "../App";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t, i18 } = useTranslation();
  const [type, setType] = useState("password");
  const [emptyInputError, setEmptyInputError] = useState(
    "empty-input-error-hidden"
  );
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useContext(UserContext);
  const [accountData, setAccountData] = useContext(AccountDataContext);

  

  const handleChandePasswordToggle = (e) => {
    e.preventDefault();
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const navigate = useNavigate();
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      setAccountData(data);
      localStorage.setItem("account", JSON.stringify(data));
      if (user.email == email && user.password == password) {
        navigate("/");
      } else {
        setEmptyInputError("empty-input-error");
      }
      console.log(accountData);
    } catch (error) {
      console.log(error);
      toast.error("Parol ve ya email sehvdir");
    }
  };
  return (
    <>
      <Form>
        <h1>{t("login.3")}</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{t("register.5")}</Form.Label>
          <Form.Control
            type="email"
            onChange={handleChangeEmail}
            value={email}
          />
          <Form.Text className={emptyInputError}>{t("login.1")}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>{t("register.6")}</Form.Label>
          <Form.Control
            type={type}
            onChange={handleChangePassword}
            value={password}
          />
          <Form.Text className={emptyInputError}>{t("login.2")}</Form.Text>
        </Form.Group>
        <div className="show-password">
          <span onClick={handleChandePasswordToggle}>
            {type == "password" ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
          {t("login.4")}
        </div>
        <Button
          className="login-btn"
          onClick={handleSubmitLogin}
          variant="primary"
          type="submit"
        >
          {t("login.3")}
        </Button>{" "}
        <br />
        <Link className="create-account-link" to="/register">
          {t("login.5")}
        </Link>
      </Form>
    </>
  );
};

export default Login;
