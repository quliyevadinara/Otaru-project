import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { BsMoonFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { AccountDataContext, ModeContext, UserContext } from "../App";
import DropdownAccount from "./DropdownAccount";
const NavPage = () => {
  const [accountData, setAccountData] = useContext(AccountDataContext);
  const [user, setUser] = useContext(UserContext);
  const [theme, setTheme] = useContext(ModeContext);
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));
  console.log(accountData);
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };
  const handleChangeTheme = (mode) => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
  };
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={
          theme == "dark" ? "bg-dark navbar-dark" : "bg-light navbar-ligh"
        }
      >
        <Container>
          <Link to="/" className="navbar-brand">
            <img
              src="https://otaru.qodeinteractive.com/wp-content/themes/otaru/assets/img/logo.svg"
              alt="Otaru"
            />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="nav-link">
                {t("navbar.1")}
              </Link>
              <Link to="/about" className="nav-link">
                {t("navbar.2")}
              </Link>
              <Link to="/shop" className="nav-link">
                {t("navbar.3")}
              </Link>
              <Link to="/blogs" className="nav-link">
                {t("navbar.4")}
              </Link>
            </Nav>
            <Nav>
              <Nav.Link>
                {theme == "dark" && (
                  <button
                    className="dark-light-mode nav-link"
                    onClick={() => handleChangeTheme("light")}
                  >
                    <BsMoonFill />
                  </button>
                )}
                {theme == "light" && (
                  <button
                    className="dark-light-mode nav-link"
                    onClick={() => handleChangeTheme("dark")}
                  >
                    <LuSunMoon />
                  </button>
                )}
              </Nav.Link>
              <Nav.Link className="language">
                {lang == "en" && (
                  <button
                    className="nav-lang "
                    onClick={() => {
                      handleChangeLanguage("az");
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                      alt="en-flag"
                    />
                    <span className="nav-link">English</span>
                  </button>
                )}
                {lang == "az" && (
                  <button
                    className="nav-lang nav-lang-az"
                    onClick={() => {
                      handleChangeLanguage("en");
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/800px-Flag_of_Azerbaijan.svg.png"
                      alt="az-flag"
                    /><span className="nav-link">Azərbaycan</span>
                  </button>
                  
                )}
              </Nav.Link>
              <Link
                to={accountData ? " " : "/login"}
                className={accountData ? "nav-link nav-link-user" : "nav-link"}
              >
                {accountData?.session?.access_token ? (
                  <DropdownAccount />
                ) : (
                  <span className="nav-link">{t("navbar.5")}</span>
                  
                )}
              </Link>

              <Link to="/cart" className="nav-link cart-icon">
                <span className="nav-link"><SlBasket /></span>
              </Link>
              <span className="cart-items">{totalItems}</span>
              <Link to="/wishlist" className="nav-link wishlist-icon">
                <span className="nav-link"><FaRegHeart /></span>
                
              </Link>
              <span className="wishlist-item">{totalWishlistItems}</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavPage;
