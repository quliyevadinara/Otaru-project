import React from "react";
import { useSelector } from "react-redux";
import { store } from "../redux/Store";
import Blog from "../components/Blog";

const Blogs = () => {
  const blogs = useSelector((store) => store.AppReducer);
  console.log(blogs);
  return (
    <div>
      {blogs?.map((blog) => {
        return <Blog blog={blog} />;
      })}
    </div>
  );
};

export default Blogs;
