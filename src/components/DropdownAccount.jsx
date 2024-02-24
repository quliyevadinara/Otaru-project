import React, { useContext, useTransition } from "react";
import { AccountDataContext, UserContext } from "../App";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DropdownAccount = () => {
  const [user, setUser] = useContext(UserContext);
  const [accountData, setAccountData] = useContext(AccountDataContext);
  const { t, i18 } = useTranslation();
  const navigate = useNavigate();
  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      let { error } = await supabase.auth.signOut();
      setAccountData(false);
      localStorage.setItem("account", JSON.stringify(false));
      console.log("object");
    } catch (error) {
      console.log(error);
    }
  };
  const handleBlogAdmin = (e) => {
    e.preventDefault();
    navigate("/blogAdmin");
  };
  // const handleProductAdmin = (e) => {
  //   e.preventDefault();
  //   navigate("/productAdmin");
  // };
  return (
    <>
      {user.username == "Dinara" &&
      user.email == "quliyevadinara14@gmail.com" ? (
        <div class="dropdown nav-link">
          <button class="dropbtn user-btn">{user.username}</button>
          <div class="dropdown-content">
            <button onClick={handleLogOut}>{t("dropdown.1")}</button>
            <button onClick={handleBlogAdmin}>{t("dropdown.2")}</button>
          </div>
        </div>
      ) : (
        <div class="dropdown nav-link">
          <button class="dropbtn user-btn">{user.username}</button>
          <div class="dropdown-content">
            <button onClick={handleLogOut}>{t("dropdown.1")}</button>
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownAccount;
