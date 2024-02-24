import React, { useContext } from "react";
import { ProductContext } from "../App";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { useTranslation } from "react-i18next";

const Recommended = () => {
  // const { id } = useParams();
  const [productData, setProductData] = useContext(ProductContext);
  // const product = productData?.find((product) => product.id == id);
  const filterProduct = productData?.slice(0,4);

  return (
    <div className="products">
      {filterProduct?.map((item) => {
          return <Product product={item} key={item.id}/>;
      })}
    </div>
  );
};

export default Recommended;
