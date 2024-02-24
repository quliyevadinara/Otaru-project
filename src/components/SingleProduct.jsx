import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext, ReviewContext } from "../App";
import { useTranslation } from "react-i18next";
import WishlistBtn from "./WishlistBtn";
import AddtoCartBtn from "./AddtoCartBtn";
import ReviewForm from "./ReviewForm";
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import SingleReview from "./SingleReview";

const SingleProduct = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [productData, setProductData] = useContext(ProductContext);
  const product = productData?.find((product) => product.id == id);
  const [review, setReview] = useContext(ReviewContext);
  console.log(product);
  return (
    <div>
      <div className="single-product">
        <div className="single-product-image">
          <img src={product?.image} alt="product-image" />
        </div>
        <div className="single-product-info">
          <h2>{product?.name}</h2>
          <p>Color:{product?.color}</p>
          <p>Category:{product?.category}</p>
          <p className="single-product-info-text">
            {product?.name} : {t("single-product.2")}
          </p>
          <div className="cart-wish">
            <AddtoCartBtn product={product} />
            <WishlistBtn product={product} />
          </div>
          <div className="review-product">
            <div className="rate-send">
              <span>
                {product?.rating > 0 ? <IoStarSharp /> : <IoStarOutline />}
              </span>
              <span>
                {product?.rating > 1 ? <IoStarSharp /> : <IoStarOutline />}
              </span>
              <span>
                {product?.rating > 2 ? <IoStarSharp /> : <IoStarOutline />}
              </span>
              <span>
                {product?.rating > 3 ? <IoStarSharp /> : <IoStarOutline />}
              </span>
              <span>
                {product?.rating > 4 ? <IoStarSharp /> : <IoStarOutline />}
              </span>
            </div>
            <ReviewForm product={product} />
          </div>
          <div className="single-product-rate-info"></div>
        </div>
      </div>
      <div className="review-container">
        <h2>{t("review.5")}</h2>
        <SingleReview product={product}/>
      </div>
    </div>
  );
};

export default SingleProduct;
