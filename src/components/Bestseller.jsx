import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import Product from "./Product";
import { ProductContext } from "../App";

const Bestseller = () => {
  const [productData, setProductData] = useContext(ProductContext);
  const { t, i18n } = useTranslation();
  const bestsellerProductArr = productData?.slice(0, 4);
  
  return (
    <div className="bestseller">
      <h3>{t("bestseller.0")}</h3>
      <div className="products">
        {bestsellerProductArr?.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Bestseller;
