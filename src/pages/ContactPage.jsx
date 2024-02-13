import React from "react";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t, i18 } = useTranslation();
  return (
    <div className="contact-page">
      <img
        className="contact-page-image"
        src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="contact-image"
      />
      <div className="contact-page-info">
        <div className="contact-page-info-text">
          <h2>{t("contact.1")}</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
          </p>
          <div className="contact-info">
            <div>
              <h4>Belgium</h4>
              <p>
                Rue de Baras 108 <br />
                Tenneville Rd <br />
                381629332193
              </p>
            </div>
            <div>
              <h4>Stockholm</h4>
              <p>
                Fäbodvägen 8 <br />
                142 33 Skogås <br />
                024993223
              </p>
            </div>
            <div>
              <h4>Glasgow</h4>
              <p>
                11 Lethington Rd, <br />
                Glasgow, G46 6TA <br />
                381629334215
              </p>
            </div>
          </div>
        </div>
        <div className="contact-page-info-input">
          {/* <label>Your name</label> */}
          <input type="text" placeholder="Your name" />
          {/* <label>Your email</label>  */}
          <input type="email" placeholder="Your email" /> <br />
          <textarea
            name="message"
            id=""
            cols="50"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>
      </div>
      <div className="contact-page-map" style={{ width: "50%" }}>
        <iframe
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Fv244,%203570%20%C3%85l,%20Norve%C3%A7+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
    </div>
  );
};

export default ContactPage;
