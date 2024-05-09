// Class.js
import React, { useState, useEffect } from "react";
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
import "./Nav.css";

function Navbar() {
  const [currentPath, setCurrentPath] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false);
    };

    // Add event listener to the document body
    document.body.addEventListener("click", closeMenu);

    // Cleanup event listener on component unmount
    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
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

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent closing menu when menu button is clicked
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div>
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <img src={pic} alt="hi" className="logokk" />
          <h1 className="title">
            Ignite Freaks Journal Web App
          </h1>
          {/* Menu button for responsive view */}
          <button className="menu-button" onClick={toggleMenu}>
            Menu
          </button>
          <ul className={menuOpen ? "active" : ""} onClick={toggleMenu}>
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
            {/* <li>
              <button
                onClick={() => {
                  setCurrentPath("editorial");
                  handleLinkClick();
                }}
              >
                Editorial Board
              </button>
            </li> */}
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

export default Navbar;
