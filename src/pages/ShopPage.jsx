import React, { useContext } from "react";
import { ProductContext } from "../App";
import Product from "../components/Product";

const ShopPage = () => {
  const [productData, setProductData] = useContext(ProductContext);
  return (
    <div className="shop-page">
      <div className="products">
        {productData?.map((item) => {
          return <Product product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ShopPage;
