import React from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Recommended from "./Recommended";

const Thanks = () => {
  const { t, i18 } = useTranslation();
  const navigate=useNavigate();
  return (
    <div className="thanks-page">
      <span className="check">
        <FaCheck />
      </span>
      <p className="thanks-text">{t("thanks.2")}. {t("thanks.1")}</p>
      <p className="continue-shopping" onClick={()=>navigate("/shop")}>{t("empty-cart.2")}</p>
      <div className="recommended-product">
        <h1>{t("recommend.1")}</h1>
        <Recommended />
      </div>
    </div>
  );
};

export default Thanks;
