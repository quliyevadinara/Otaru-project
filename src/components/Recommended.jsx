import React, { useContext } from "react";
import { ProductContext } from "../App";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { useTranslation } from "react-i18next";

const Recommended = () => {
  const { id } = useParams();
  const [productData, setProductData] = useContext(ProductContext);
  const product = productData?.find((product) => product.id == id);
  const filterProduct = productData?.filter((product) => product.id != id);
  console.log(filterProduct);
  return (
    <div className="products">
      {filterProduct?.map((item) => {
        if (item.category == product.category) {
          return <Product product={item} key={item.id}/>;
        } 
      })}
    </div>
  );
};

export default Recommended;
