import React, { useContext } from "react";
import { AccountDataContext, UserContext } from "../App";
import { supabase } from "../supabase/client";

const DropdownAccount = () => {
  const [user, setUser] = useContext(UserContext);
  const [accountData, setAccountData] = useContext(AccountDataContext);
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
  return (
    <div>
      <div class="dropdown">
        <button class="dropbtn">{user.username}</button>
        <div class="dropdown-content">
          <button onClick={handleLogOut}>Log out</button>
          <button>Products</button>
          <button>Blogs</button>
        </div>
      </div>
    </div>
  );
};

export default DropdownAccount;
