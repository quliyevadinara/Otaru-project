import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div
      className="single-blog"
      onClick={() => navigate(`/blogs/${blog.id}`)}
    >
      <div className="single-blog-image">
        <img src={blog.image} alt="" />
      </div>
      <div className="single-blog-text">
        <h2>{blog.title}</h2>
        <p>{blog.description.slice(0, 400)} . . .</p>
      </div>
    </div>
  );
};

export default Blog;
