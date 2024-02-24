import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import Bestseller from "../components/Bestseller";
import Blogs from "./Blogs";
import { useSelector } from "react-redux";
import Blog from "../components/Blog";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const blogs = useSelector((store) => store.AppReducer);

  return (
    <div className="home-page">
      <div className="carousel-image">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="carousel-item-image"
              src="https://otaru.qodeinteractive.com/wp-content/uploads/2022/09/home-9-rev-img-2.png"
              alt=""
            />

            <Carousel.Caption>
              <h3>{t("home-page.1")}</h3>
              <Link to="/shop" className="shop-link">
                {t("home-page.2")}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="carousel-item-image"
              src="https://otaru.qodeinteractive.com/wp-content/uploads/2022/09/home-9-rev-img-3.png"
              alt=""
            />
            <Carousel.Caption>
              <h3>{t("home-page.3")}</h3>
              <Link to="/shop" className="shop-link">
                {t("home-page.5")}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="carousel-item-image"
              src="https://otaru.qodeinteractive.com/wp-content/uploads/2022/09/home-9-rev-img-new.png"
              alt=""
            />
            <Carousel.Caption>
              <h3>{t("home-page.6")}</h3>
              <Link to="/cart" className="shop-link">
                {t("home-page.7")}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Bestseller />
      <div className="home-page-blogs">
        <h1>{t("blogs.2")}</h1>
        <div className="blog-section">
          {blogs?.map((blog) => {
            return <Blog blog={blog} key={blog.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
