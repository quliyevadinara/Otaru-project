import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeblogFunction } from "../redux/Action";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BlogAdmin = () => {
  const { t, i18 } = useTranslation();
  const blogs = useSelector((store) => store.AppReducer);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="blog-admin-container">
      <table className="table table-dark ">
        <thead>
          <tr>
            <th scope="col">{t("admin-blog.1")}</th>
            <th scope="col">{t("admin-blog.2")}</th>
            <th scope="col">{t("admin-blog.3")}</th>
            <th scope="col">{t("admin-blog.4")}</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((item, index) => {
            return (
              <tr key={item.id}>
                <td className="item-image-name">
                  <img
                    className="item-image"
                    src={item.image}
                    alt="item-image"
                  />
                </td>

                <td>{item.title}</td>
                <td>{item.description.slice(0, 20)} . . .</td>
                <td>
                  <Link
                    to={`/blogAdmin/${item.id}`}
                    className="btn btn-warning"
                  >
                    {t("admin-blog.4")}
                  </Link>
                  <button
                    scope="row"
                    className="remove-item btn btn-danger"
                    onClick={() => {
                      dispatch(removeblogFunction(item.id));
                    }}
                  >
                    {t("admin-blog.8")}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="new-blog">
        <button onClick={()=>navigate("/addBlog")} className="btn btn-success">{t("admin-blog.6")}</button>
      </div>
    </div>
  );
};

export default BlogAdmin;
