import React from "react";
import "./contact.css";
import k from "../Images/contact.jpg";
import { FaEnvelope, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-item">
          <FaEnvelope />
          <span>Email: your.email@example.com</span>
        </div>
        <div className="contact-item">
          <FaMobileAlt />
          <span>Contact Number: +91-9488058361</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt />
          <span>
            No.6/9, Kamarajapuram 17th Street 1st Cross, Pudukkottai-622001,
            Tamilnadu, India
          </span>
        </div>
        <div>
          <img src={k} alt="hi" className="kl" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
