import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import WishlistBtn from "./WishlistBtn";
import { useNavigate } from "react-router-dom";
import AddtoCartBtn from "./AddtoCartBtn";

const Product = ({ product }) => {
  const [changeVisibility, setChangeVisibility] = useState("");
  const { t, i18n } = useTranslation();
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
          <div className="product-image-inner">
            <AddtoCartBtn product={product} />
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
