import React, { useContext } from "react";
import { ReviewContext } from "../App";
import { useParams } from "react-router-dom";

const SingleReview = ({product}) => {
  const [review, setReview] = useContext(ReviewContext);
  console.log(review);
  console.log(product.id);
  return (
    <div className="single-review">
      {review.map((item) =>
      {
        item.id == product.id ? (
          <div className="review-section">
            <span>{item.id}</span>
            <p>{item.name}</p>
          </div>
        ) : (
          "Yorum yoxdur"
        );
      })}
    </div>
  );
};

export default SingleReview;
