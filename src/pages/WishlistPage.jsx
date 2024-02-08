import React from "react";
import { useWishlist } from "react-use-wishlist";
import Product from "../components/Product";
import EmptyWishlist from "../components/EmptyWishlist";

const WishlistPage = () => {
  const { items } = useWishlist();
  return (
    <>
      {items.length == 0 ? (
        <EmptyWishlist />
      ) : (
        <div className="wishlist-page">
          <div className="products">
            {items?.map((item) => {
              return <Product product={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default WishlistPage;
