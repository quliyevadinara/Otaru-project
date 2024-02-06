import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="footer-page">
      <hr />
      <div class="row">
        <div class="col-3 footer-category-logo">
          <img
            src="https://otaru.qodeinteractive.com/wp-content/uploads/2022/08/logo-footer-img.png"
            alt="logo"
          /> <br />
          <span>{t("footer.1")}</span>
        </div>
        <div class="col-3">
          <p>{t("footer.2")}</p>
          <div className="footer-category">
            <span>Fv244, 3570 Ål, Norveç </span>
            <br />
            <span>077 777 77 77 </span> <br />
            <span>otaru@example.com </span> <br />
          </div>
        </div>
        <div class="col-3">
          <p>{t("footer.3")}</p>
          <div className="footer-category">
            <a href="https://www.instagram.com/">{t("footer.5")}</a> <br />
            <a href="https://www.linkedin.com/home?originalSubdomain=az">{t("footer.6")}</a> <br />
            <a href="https://www.facebook.com/?locale=az_AZ">{t("footer.7")}</a> <br />
          </div>
        </div>
        <div class="col-3">
          <p>{t("footer.4")}</p>
          <div className="footer-category">
            {" "}
            <Link to="/contact" className="footer-link">{t("footer.8")}</Link> <br />
            <Link to="/our-team" className="footer-link">{t("footer.9")}</Link> <br />
            <Link to="/faq" className="footer-link">{t("footer.10")}</Link> <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
