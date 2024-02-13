import React, { useContext } from "react";
import { AccountDataContext, UserContext } from "../App";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

const DropdownAccount = () => {
  const [user, setUser] = useContext(UserContext);
  const [accountData, setAccountData] = useContext(AccountDataContext);
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
  const handleProductAdmin = (e) => {
    e.preventDefault();
    navigate("/productAdmin");
  };
  return (
    <div>
      <div class="dropdown">
        <button class="dropbtn">{user.username}</button>
        <div class="dropdown-content">
          <button onClick={handleLogOut}>Log out</button>
          <button onClick={handleProductAdmin}>Products</button>
          <button onClick={handleBlogAdmin}>Blogs</button>
        </div>
      </div>
    </div>
  );
};

export default DropdownAccount;
