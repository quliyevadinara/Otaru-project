import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
const NavPage = () => {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark">
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
                {t("navbar.6")}/{t("navbar.7")}
              </Nav.Link>
              <Nav.Link className="language">
                <button
                  onClick={() => {
                    handleChangeLanguage("en");
                  }}
                >
                  English{" "}
                </button>
                <button
                  onClick={() => {
                    handleChangeLanguage("az");
                  }}
                >
                  Azərbaycan
                </button>
              </Nav.Link>
              <Nav.Link>{t("navbar.5")}</Nav.Link>

              <Link to="/cart" className="nav-link">
                <SlBasket />
              </Link>
              <span className="cart-items">{totalItems}</span>
              <Link to="/wishlist" className="nav-link">
                <FaRegHeart />
              </Link>
              <span className="wishlist-item">{totalWishlistItems}</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavPage;
