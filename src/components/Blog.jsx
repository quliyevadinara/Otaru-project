import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="container">
      <div className="column">
        <div className="product">
          <div>
            <div className="product-image-inner">
              <h5>{blog.title}</h5>
              <span>{blog.description}</span>
            </div>
            <img className="bestseller-image" src={blog.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
