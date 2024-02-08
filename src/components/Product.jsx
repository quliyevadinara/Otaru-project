import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import { ProductContext } from "../App";
import { toast } from "react-toastify";
import WishlistBtn from "./WishlistBtn";
import { useNavigate } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Product = ({ product }) => {
  const [changeVisibility, setChangeVisibility] = useState("");
  const { t, i18n } = useTranslation();
  const { items, addItem } = useCart();
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/shop/${product.id}`)}>
      <div className="product">
        <div
          className={changeVisibility}
          onMouseEnter={() => {
            setChangeVisibility("show-section");
          }}
          onMouseLeave={() => {
            setChangeVisibility("");
          }}
        >
          <div
            className="product-image-inner"
            
          >
            <button
              className="add-cart-btn"
              onClick={(e) => {
                e.stopPropagation();
                addItem(product);
                toast.success(`${t("product.1")}`);
              }}
            >
              {t("bestseller.5")}
            </button>
            <WishlistBtn product={product} />
            <h5>{product.name}</h5>
            <span>{product.price}.00$</span>
          </div>
          <div className="product-image">
            <img className="bestseller-image" src={product.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;