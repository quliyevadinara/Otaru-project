import React, { useContext, useState } from "react";
import { ProductContext } from "../App";
import { Select, Space } from "antd";
import Product from "../components/Product";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ShopPage = () => {
  const { t, i18 } = useTranslation();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [productData, setProductData] = useContext(ProductContext);
  const [state, setState] = useState(productData); 
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

  function getKeyByValue(array, value) {
    for (let i = 0; i < array.length; i++) {
      for (let prop in array[i]) {
        if (array[i].hasOwnProperty(prop)) {
          if (array[i][prop] === value) {
            return prop;
          }
        }
      }
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (text) {
      const word = text.trim();
      const value = word[0].toUpperCase() + word.slice(1);
      const sort = getKeyByValue(productData, value);
      navigate(`/Special Products/${sort}/${value}`);
    }
  };
  return (
    <>
      <div className="shop-page">
        <div className="sort-filter-products">
          <div className="search-item">
            <form action="" onSubmit={handleSubmitForm}>
              <input
                type="text"
                placeholder="Search..."
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </form>
            <button>
              <FaSearch />
            </button>
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
          <div className="container color-filter-product">
            <p>Color</p>
            <div className="colors-btn">
              {colorsArr.map((item) => {
                return (
                  <button
                    onClick={() => filterColors(item)}
                    className="btn btn-light m-1"
                    key={item.id}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="container category-filter-product">
            <p>Category</p>
            <div className="category-btn">
              {categoriesArr.map((item) => {
                return (
                  <button
                    onClick={() => filterCategories(item)}
                    className="btn btn-light m-1"
                    key={item.id}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
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
