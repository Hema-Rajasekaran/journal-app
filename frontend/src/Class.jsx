import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About Us/AboutUs";
import ContactUs from "./Components/Contact Us/ContactUs";
import pic from "../src/Components/Images/ignite.png";
import AimScope from "./Components/Aim and Scope/AimScope";
import Topics from "./Components/Topics/Topics";
import EditorialBoard from "./Components/EditorialBoard/EditorialBoard";
import Archives from "./Components/Archives/Archives";
import OnlineSubmission from "./Components/OnlineSubmission/OnlineSubmission";
import "./Class.css";

function Class() {
  const [currentPath, setCurrentPath] = useState("home");

  const handleLinkClick = () => {
    document.getElementById("menu-toggle").checked = false;
  };

  const RouterSwitch = () => {
    switch (currentPath) {
      case "home":
        return <Home />;
      // case "about":
      //   return <AboutUs />;
      // case "aim":
      //   return <AimScope />;
      case "topic":
        return <Topics />;
      case "online":
        return <OnlineSubmission />;
      case "editorial":
        return <EditorialBoard />;
      case "archive":
        return <Archives />;
      case "contact":
        return <ContactUs />;
      default:
        return <h2>Page not found</h2>;
    }
  };

  return (
    <Router>
      <div>
        <input type="checkbox" className="menu-checkbo" id="menu-toggle" />
        <label className="menu-toggle" htmlFor="menu-toggle">
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </label>
        <nav className="navbar">
          <img src={pic} alt="hi" className="logokk" />
          <h1 className="title">
            International Journal of Research in Arts, Science, Technology,
            Education and Management
          </h1>
          <ul>
            <li>
              <button
                onClick={() => {
                  setCurrentPath("home");
                  handleLinkClick();
                }}
              >
                Home
              </button>
            </li>
            {/* <li>
              <button
                onClick={() => {
                  setCurrentPath("about");
                  handleLinkClick();
                }}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPath("aim");
                  handleLinkClick();
                }}
              >
                Aim & Scope
              </button>
            </li> */}
            <li>
              <button
                onClick={() => {
                  setCurrentPath("topic");
                  handleLinkClick();
                }}
              >
                Topic
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPath("online");
                  handleLinkClick();
                }}
              >
                Online Submission
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPath("editorial");
                  handleLinkClick();
                }}
              >
                Editorial Board
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPath("archive");
                  handleLinkClick();
                }}
              >
                Archive
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPath("contact");
                  handleLinkClick();
                }}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
        <div>{RouterSwitch()}</div>
      </div>
    </Router>
  );
}

export default Class;
