import React from "react";
import "./About.css";
import g from "../Images/tara.jpg";
import Footer from "../Footer";
import Scrollingbar from "../Scrollingbar";

const AboutUs = () => {
  return (
    <div className="about">
      <Scrollingbar />
      <div className="about-us-container">
        <h2>About Us</h2>
        <p>
          Ignite Freaks Journal App is an international, peer-reviewed, open-access, online
          journal. It aims to provide an online platform to promote excellence
          and advancement in the different areas of arts, science, technologies,
          education, and management (IJRASTEM).
        </p>
      </div>
      <div>
        <img src={g} alt="hi" className="kk" />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
