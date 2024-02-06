import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="about-page">
      <img
        className="about-us-image"
        src="https://aboutdevice.com/wp-content/uploads/2021/05/5-Best-Laptops-for-Graphic-Design-2021.jpg"
        alt=""
      />
      <span className="about">{t("about-page.1")}</span>
      <div className="about-text-image">
        <div className="about-text">
          <h3>{t("about-page.2")}</h3> <br />
          <p>{t("about-page.3")}</p>
        </div>
        <div className="about-img">
          <img
            src="https://otaru.qodeinteractive.com/wp-content/uploads/2022/06/h1-shop-img-02.jpg"
            alt=""
          />
          <img
            src="https://otaru.qodeinteractive.com/wp-content/uploads/2022/06/h1-shop-img-01.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="features">
        <div>
          <h4>{t("about-page.4")}</h4>
          <span>{t("about-page.7")}</span>
        </div>
        <div>
          <h4>{t("about-page.5")}</h4>
          <span>{t("about-page.8")}</span>
        </div>
        <div>
          <h4>{t("about-page.6")}</h4>
          <span>{t("about-page.9")}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
