import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useWishlist } from "react-use-wishlist";

const WishlistBtn = () => {
  const {inWishlist,addWishlistItem, removeWishlistItem} = useWishlist();
  const toggleWisht=(myProduct)=>{

  }

  return (
    <div>
      <button className="heart-btn">
        <FaRegHeart />
      </button>
    </div>
  );
};

export default WishlistBtn;
