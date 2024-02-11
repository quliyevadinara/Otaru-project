import React from "react";
import { useSelector } from "react-redux";
import { store } from "../redux/Store";
import Blog from "../components/Blog";
import { useTranslation } from "react-i18next";

const Blogs = () => {
  const { t, i18 } = useTranslation();
  const blogs = useSelector((store) => store.AppReducer);
  console.log(blogs);
  return (
    <div className="blog-page">
      <div className="images-container">
        <img
          className="main-image"
          src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="second-image-container">
          <img
            className="second-image"
            src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="second-image"
            src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <span className="about">{t("blogs.1")}</span>
      <h1 >{t("blogs.2")}</h1>
      {blogs?.map((blog) => {
        return <Blog blog={blog} />;
      })}
    </div>
  );
};

export default Blogs;
