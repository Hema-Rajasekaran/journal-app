import React, { useEffect, useState } from "react";
import "./Home.css";
import vid from "../Images/video.mp4";
import Footer from "../Footer";
import "../About Us/About.css";
import Scrollingbar from "../Scrollingbar";
import h from "../Images/bkg.jpg";
import Topics from "../Topics/Topics";

function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "IJRASTEM";

  useEffect(() => {
    const typeText = (index) => {
      if (index < fullText.length) {
        setTimeout(() => {
          setTypedText((prevText) => prevText + fullText[index]);
          typeText(index + 1);
        }, 200); // Adjust the typing speed (milliseconds)
      } else {
        // Restart typing animation after a delay
        setTimeout(() => {
          setTypedText("");
          typeText(0);
        }, 2000); // Adjust the delay before restarting typing
      }
    };

    typeText(0); // Start typing animation

    return () => clearTimeout(); // Cleanup function
  }, []); // Run once on mount

  return (
    <div className="home">
      <Scrollingbar />
      <div className="aim-scope">
        <video width="640" height="340" autoPlay loop muted >
          <source src={vid} type="video/mp4"/> 
        </video>
      </div>
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
        <img src={h} alt="hi" className="kk" />
      </div>

      <div className="aim-scope-content">
        <h2>Aim & Scope</h2>
        <p>
          The primary aim is to offer academicians, researchers, and students
          from all around the world specialized services for publishing research
          and review articles. It is our aim to present the most innovative,
          genuine, and current research findings through each of your
          submissions. We handle your requirements and make sure the leading
          academics in the field quickly publish your research. Priority is
          given to high-quality papers that focus on fundamental ideas that have
          the potential to make significant contributions to the field of
          research. We publish authentic research in the fields of the arts,
          science, technology, education and management.
        </p>
      </div>
      <Topics />

      <Footer />
    </div>
  );
}

export default Home;
