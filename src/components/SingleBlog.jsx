import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const blogs = useSelector((store) => store.AppReducer);
  const blog = blogs.find((item) => item.id == id);
  return (
    <div className="single-blog-info">
      <div className="single-blog">
        <div className="single-blog-image">
          <img src={blog.image} alt="" />
        </div>
        <div className="single-blog-text">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
