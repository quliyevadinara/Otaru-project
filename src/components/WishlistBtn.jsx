import React, { useState } from "react";
import { FaRegHeart, FaUserInjured } from "react-icons/fa6";
import { useWishlist } from "react-use-wishlist";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
const WishlistBtn = ({ product }) => {
  const { t, i18 } = useTranslation();
  const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();
  const [heartClass, setHeartClass] = useState(
    inWishlist(product.id) ? "heart-btn-hover" : "heart-btn"
  );
  const toggleWisht = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
      setHeartClass("heart-btn");
      toast.success(`${t("wishlist.1")}`);
    } else {
      setHeartClass("heart-btn-hover");
      addWishlistItem(myProduct);
      toast.success(`${t("wishlist.2")}`);
    }
  };

  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWisht(product);
        }}
        className={heartClass}
      >
        <FaRegHeart />
      </button>
    </div>
  );
};

export default WishlistBtn;
