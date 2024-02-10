import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../App";
import { useTranslation } from "react-i18next";
import WishlistBtn from "./WishlistBtn";
import Recommended from "./Recommended";
import AddtoCartBtn from "./AddtoCartBtn";

const SingleProduct = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [productData, setProductData] = useContext(ProductContext);
  const product = productData?.find((product) => product.id == id);
  return (
    <div>
      <div className="single-product">
        <div className="single-product-image">
          <img src={product.image} alt="product-image" />
        </div>
        <div className="single-product-info">
          <h2>{product.name}</h2>
          <p>Color:{product.color}</p>
          <p>Category:{product.category}</p>
          <p className="single-product-info-text">
            {product.name} : {t("single-product.2")}
          </p>
          <div className="cart-wish">
            <AddtoCartBtn product={product} />
            <WishlistBtn product={product} />
          </div>
        </div>
      </div>

      <div className="recommended-product">
        <h1>{t("recommend.1")}</h1>
        <Recommended />
      </div>
    </div>
  );
};

export default SingleProduct;
