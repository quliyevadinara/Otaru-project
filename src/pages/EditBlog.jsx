import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editblogFunction } from "../redux/Action";
import { useTranslation } from "react-i18next";

const EditBlog = () => {
  const { id } = useParams();
  const { t, i18 } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogs = useSelector((store) => store.AppReducer);
  const myBlog = blogs.find((item) => item.id == id);
  const [editBlogState, setEditBlogState] = useState(myBlog);
  const handleChange = (e) => {
    e.preventDefault();
    setEditBlogState({ ...editBlogState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editblogFunction(editBlogState));
    navigate("/blogAdmin");
  };
  return (
    <div className="edit-blog-page">
      <div className="edit-blog-info">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="id"
              disabled
              defaultValue={editBlogState.id}
              onChange={handleChange}
            />
          </Form.Group>{" "}
          <label htmlFor="floatingTextarea2">{t("admin-blog.1")}</label>
          <div className="form-floating">
            <textarea
              className="form-control"
              name="image"
              id="floatingTextarea2"
              style={{ height: 100 }}
              defaultValue={editBlogState.image}
              onChange={handleChange}
            />
          </div>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{t("admin-blog.2")}</Form.Label>
            <Form.Control
              type="text"
              name="title"
              defaultValue={editBlogState.title}
              onChange={handleChange}
            />
          </Form.Group>
          <label htmlFor="floatingTextarea2">{t("admin-blog.3")}</label>
          <div className="form-floating">
            <textarea
              className="form-control"
              name="description"
              id="floatingTextarea2"
              style={{ height: 100 }}
              defaultValue={editBlogState.description}
              onChange={handleChange}
            />
          </div>
          <Button variant="primary" type="submit">
          {t("admin-blog.5")}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditBlog;
