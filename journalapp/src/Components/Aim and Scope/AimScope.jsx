import React from "react";
import "./aim.css";
import h from "../Images/bkg.jpg";
import Footer from "../Footer";
import Scrollingbar from "../Scrollingbar";

function AimScope() {
  return (
    <div className="aim">
      <Scrollingbar />
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
      <div>
        <img src={h} alt="hi" className="kk" />
      </div>
      <Footer />
    </div>
  );
}

export default AimScope;
