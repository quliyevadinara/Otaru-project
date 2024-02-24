import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../App";
import Product from "./Product";

const SpecialProduct = () => {
  const [productData, setProductData] = useContext(ProductContext);
  const product = useParams();
  const products = productData?.filter(
    (item) => item[product.sort] == product.value
  );
  return (
    <div className="special-product-page">
      <div className="products">
        {products?.map((item) => {
          return <Product product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default SpecialProduct;
