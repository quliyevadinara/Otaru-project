import React, { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../App";
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const ReviewForm = ({ product }) => {
  const { t, i18 } = useTranslation();
  const [nameError, setNameError] = useState("name-error-hidden");
  const [emailError, setEmailError] = useState("email-error-hidden");
  const [textareaError, setTextareaError] = useState("textarea-error-hidden");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [review, setReview] = useContext(ReviewContext);
  console.log(review);
  function addReview() {
    setReview([
      ...review,
      {
        id: product.id,
        reviews: { name, mail: email, review: textarea },
      },
    ]);
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
     if (!name) {
      setNameError("name-error");
    } else if (!email) {
      setEmailError("email-error");
    } else if (!textarea) {
      setTextareaError("textarea-error");
    } else {
      addReview();
      localStorage.setItem("review", JSON.stringify(review));
      toast.success(`${t("review.4")}`);
      setName("");
      setEmail("");
      setTextarea("");
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <p className={nameError}>{t("review.2")}</p>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className={emailError}>{t("review.2")}</p>

        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="Your review"
          value={textarea}
          onChange={(e) => {
            setTextarea(e.target.value);
          }}
        ></textarea>
        <p className={textareaError}>{t("review.2")}</p>

        <button>{t("review.3")}</button>
      </form>
    </>
  );
};

export default ReviewForm;
