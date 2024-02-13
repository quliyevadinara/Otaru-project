import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addblogFunction, removeblogFunction } from "../redux/Action";
import { v4 as uuidv4 } from "uuid";

const AddBlog = () => {
  const [blog, setBlog] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    image: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addblogFunction(blog));
    navigate("/blogs");
  };
  return (
    <div className="edit-blog-page">
      <div className="edit-blog-info">
        <Form onSubmit={handleSubmit}>
          <label htmlFor="floatingTextarea2">Image</label>
          <div className="form-floating">
            <textarea
              className="form-control"
              name="image"
              id="floatingTextarea2"
              style={{ height: 100 }}
              onChange={handleChange}
            />
          </div>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" onChange={handleChange} />
          </Form.Group>{" "}
          <label htmlFor="floatingTextarea2">Description</label>
          <div className="form-floating">
            <textarea
              className="form-control"
              name="description"
              id="floatingTextarea2"
              style={{ height: 100 }}
              onChange={handleChange}
            />
          </div>
          <Button variant="primary" type="submit">
            Add Blog
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddBlog;
