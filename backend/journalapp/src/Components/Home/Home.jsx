import React, { useEffect, useState } from "react";
import "./Home.css";
import pic1 from "../Images/duck.jpg";
import Footer from "../Footer";
import Scrollingbar from "../Scrollingbar";

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
        <img src={pic1} alt="hello" className="i1" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
