import React, { useContext, useState } from "react";
import { ProductContext } from "../App";
import { Select, Space } from "antd";
import Product from "../components/Product";
import { useTranslation } from "react-i18next";

const ShopPage = () => {
  const { t, i18 } = useTranslation();
  const [productData, setProductData] = useContext(ProductContext);
  console.log(productData);
  const [state, setState] = useState(productData);
  console.log(state);

  const colorsArr = ["Green", "Black", "Gray", "White", "Blue", "Purple"];
  const categoriesArr = [
    "All",
    "Smartphone",
    "Mouse",
    "Headphones",
    "Speaker",
    "Watch",
    "Glasses",
    "Keyboard",
    "Camera",
    "Earbuds",
  ];
  //// Sort function =================================================
  const sortProduct = (value) => {
    if (value == "all") {
      setState(productData);
      return;
    } else if (value == "azalan") {
      let copyState = [...state];
      let sortedProduct = copyState.sort((a, b) => b.price - a.price);
      setState(sortedProduct);
    } else if (value == "artan") {
      let copyState = [...state];
      let sortedProduct = copyState.sort((a, b) => a.price - b.price);
      setState(sortedProduct);
    } else if (value == "a-z") {
      let copyState = [...state];
      let sortedProduct = copyState.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setState(sortedProduct);
    } else if (value == "z-a") {
      let copyState = [...state];
      let sortedProduct = copyState.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setState(sortedProduct);
    }
  };
  //================================================================

  const filterColors = (myColor) => {
    const filterArr = productData.filter((item) => item.color == myColor);
    setState(filterArr);
  };

  const filterCategories = (myCategory) => {
    if (myCategory == "All") {
      setState(productData);
      return;
    }
    const filterArr = productData.filter((item) => item.category == myCategory);
    setState(filterArr);
  };
  return (
    <>
      <div className="container">
        {colorsArr.map((item) => {
          return (
            <button
              onClick={() => filterColors(item)}
              className="btn btn-light m-2"
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="container">
        {categoriesArr.map((item) => {
          return (
            <button
              onClick={() => filterCategories(item)}
              className="btn btn-light m-2"
            >
              {item}
            </button>
          );
        })}
      </div>
      <Select
        defaultValue="All"
        style={{
          width: 180,
        }}
        onChange={sortProduct}
        options={[
          {
            value: "a-z",
            label: "A-Z",
          },
          {
            value: "z-a",
            label: "Z-A",
          },
          {
            value: "artan",
            label: `${t("sort-product.1")}`,
          },
          {
            value: "azalan",
            label: `${t("sort-product.2")}`,
          },
        ]}
      />
      <div className="shop-page">
        <div className="products">
          {state?.map((item) => {
            return <Product product={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
