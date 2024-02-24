import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";

const FaqPage = () => {
  const [open, setOpen] = useState("");
  const { t, i18 } = useTranslation();
  const faqArray = [
    {
      id: "1",
      question: `${t("faq-page.2")}`,
      answer: `${t("faq-page.7")}`,
    },
    {
      id: "2",
      question: `${t("faq-page.3")}`,
      answer: `${t("faq-page.8")}`,
    },
    {
      id: "3",
      question: `${t("faq-page.4")}`,
      answer: `${t("faq-page.9")}`,
    },
    {
      id: "4",
      question: `${t("faq-page.5")}`,
      answer: `${t("faq-page.10")}`,
    },
    {
      id: "5",
      question: `${t("faq-page.6")}`,
      answer: `${t("faq-page.11")}`,
    },
  ];

  return (
    <div className="faq-page">
      <h2>{t("faq-page.1")}</h2>
      <div className="items">
        {faqArray.map((element) => (
          <div
            className={open === element.id ? "open-item" : "item"}
            key={element.id}
          >
            <div className="item-question">
              <div className="item-question-id">
                <span>0{element.id}</span>
                <span>{element.question}</span>
              </div>

              <span
                onClick={() => setOpen(open === element.id ? "" : element.id)}
                className="item-icon"
              >
                <IoIosArrowDown />
              </span>
            </div>
            <div className="item-answer">
              <span>{element.answer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
