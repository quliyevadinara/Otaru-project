import React from "react";
import { useParams } from "react-router-dom";
import SingleBlog from "../components/SingleBlog";
import { useSelector } from "react-redux";
import Blog from "../components/Blog";
import { useTranslation } from "react-i18next";

const SingleBlogPage = () => {
  const { t, i18 } = useTranslation();
  const { id } = useParams();
  const blogs = useSelector((store) => store.AppReducer);
  const blog = blogs.filter((item) => item.id != id);
  //   console.log(blog);
  return (
    <>
      <SingleBlog />
      <div className="other-blog-info">
        <h1>{t("blogs.3")}</h1>
        {blog.map((element) => {
          return <Blog blog={element} key={element.id} />;
        })}
      </div>
    </>
  );
};

export default SingleBlogPage;
