import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { supabase } from "../supabase/client";
import { AccountDataContext, UserContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Register = () => {
  const { t, i18 } = useTranslation();
  const [type, setType] = useState("password");
  const [emptyInputError, setEmptyInputError] = useState(
    "empty-input-error-hidden"
  );
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUserName] = useState();
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const checkEmail = emailRegex.test(String(user.email).toLowerCase());
  const checkPass = passwordRegex.test(String(user.password).toLowerCase());

  console.log(checkPass,checkEmail);
  const handleChandePasswordToggle = (e) => {
    e.preventDefault();
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const handleChangeUsername = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const handleChangeEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const handleChangePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  console.log(user);
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
          emailRedirectTo: "https://example.com/welcome",
        },
      });
      if (checkEmail && checkPass) {
        navigate("/login");
      } else {
        setEmptyInputError("empty-input-error");
      }

      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form>
        <h1>{t("register.8")}</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{t("register.4")}</Form.Label>
          <Form.Control type="text" onChange={handleChangeUsername} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{t("register.5")}</Form.Label>
          <Form.Control type="email" onChange={handleChangeEmail} />
        </Form.Group>
        <Form.Text className={emptyInputError}>{t("register.1")}</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>{t("register.6")}</Form.Label>
          <Form.Control
            type={type}
            onChange={handleChangePassword}
            value={password}
          />
          <Form.Text id="pass-error" className={emptyInputError}>
            {t("register.2")}
          </Form.Text>
        </Form.Group>
        <div className="show-password">
          <span onClick={handleChandePasswordToggle}>
            {type == "password" ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
          {t("login.4")}
        </div>
        <Button
          className="register-btn"
          onClick={handleSubmitForm}
          variant="primary"
          type="submit"
        >
          {t("register.7")}
        </Button>{" "}
        <br />
        <Link className="create-account-link" to="/login">
          {t("register.3")}
        </Link>
      </Form>
    </>
  );
};

export default Register;
