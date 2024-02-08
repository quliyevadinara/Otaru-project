import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const EmptyWishlist = () => {
    const { t, i18 } = useTranslation();
  return (
    <div className="empty-wishlist">
      <h1>{t("empty-wishlist.1")}</h1>
      <Link to="/shop" className="empty-cart-shop">
        {t("empty-cart.2")}
      </Link>
    </div>
  );
};

export default EmptyWishlist;
