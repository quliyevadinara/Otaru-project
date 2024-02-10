import React from "react";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";

const AddtoCartBtn = ({ product }) => {
  const { t, i18 } = useTranslation();
  const { addItem, removeItem, inCart } = useCart();
  const toggleAddCart = (myProduct) => {
    if (inCart(myProduct.id)) {
      removeItem(myProduct.id);
      toast.error(`${t("cart-page.9")}`);
    } else {
      addItem(myProduct);
      toast.success(`${t("product.1")}`);
    }
  };
  return (
    <div>
      <button
        className="add-cart-btn"
        onClick={(e) => {
          e.stopPropagation();
          toggleAddCart(product);
        }}
      >
        {inCart(product.id) ? `${t("bestseller.6")}` : `${t("bestseller.5")}`}
      </button>
    </div>
  );
};

export default AddtoCartBtn;
