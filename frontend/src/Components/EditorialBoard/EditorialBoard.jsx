import React from "react";
import "./EditorialBoard.css"; // Import CSS file for styling
import Footer from "../Footer";
//https://journal-app-backend-3466.onrender.com
function EditorialBoard() {
  return (
    <div className="editorial-board">
      <h2>Editor in Chief</h2>
      <div className="editor">
        <p>Dr. M. Meignanamoorthy</p>
        <p>Editor in Chief</p>
        <p>Associate Professor</p>
        <p>Department of Mechanical Engineering</p>
        <p>Chendhuran College of Engineering and Technology</p>
        <p>Lena Vilakku, Pudukkottai-622507</p>
        <p>Tamilnadu, India</p>
        <p>Email: </p>
      </div>

      <h2>Editorial Board Members</h2>

      <div className="editor">
        <p>Dr. Redouane Zitoune</p>
        <p>Associate Professor</p>
        <p>Department of Mechanical Engineering</p>
        <p>Paul Sabatier University - Toulouse III</p>
        <p>Institut Clement Ader (ICA, CNRS UMR 5312)</p>
        <p>Toulouse, France</p>
        <p>Email: redouane.zitoune@iut-tlse3.fr</p>
      </div>

      <div className="editor">
        <p>Dr. J. Isaac Joshua Ramesh Lalvani</p>
        <p>Faculty of Mechanical Engineering</p>
        <p>Arba Minch Institute of Technology</p>
        <p>Arba Minch University</p>
        <p>Ethiopia P.O. Box 21</p>
        <p>Email: isaac.jrl@amu.edu.et</p>
      </div>

      <div className="editor">
        <p>Jayasree Varadarajan</p>
        <p>AI lead Technical Analyst</p>
        <p>Center for Digital Innovation</p>
        <p>Manchestor Metropolitan University</p>
        <p>United Kingdom</p>
        <p>Email: jayasree.varadarajan@mmu.ac.uk</p>
      </div>

      <div className="editor">
        <p>Dr. T.Balamurugan</p>
        <p>Principal</p>
        <p>Arasu Engineering College</p>
        <p>Kumbakonam</p>
        <p>Tamilnadu,India</p>
        <p>Email: principal@aec.org.in</p>
      </div>
      <div className="editor">
        <p>Dr. D.Dhachinamoorthi</p>
        <p>Principal</p>
        <p>QIS College of Pharmacy</p>
        <p>Ongole-523272,Vegamukkapalem</p>
        <p>Andhra Pradesh,India</p>
        <p>Email: principal@qiscp.edu.in</p>
      </div>

      <div className="editor">
        <p>Dr.R.Vijayalakhmi</p>
        <p>Professor</p>
        <p>Department of English</p>
        <p>Dhanalakshmi Srinivasan University</p>
        <p>Samayapuram,Trichy</p>
        <p>Tamilnadu,India</p>
        <p>Email: vijayalakshmi.set@dsuniversity.ac.in</p>
      </div>
      <div className="editor">
        <p>Dr.G.NavaneethaKrishnan</p>
        <p>Associate Professor & Head</p>
        <p>Department of Mechanical Engineering</p>
        <p>QIS College of Engineering and Technology(Autonomous)</p>
        <p>Ongole-523272,Vegamukkapalem</p>
        <p>Andhra Pradesh,India</p>
        <p>Email: drnavaneethakrishnan.g@qiscet.edu</p>
      </div>
      <div className="editor">
        <p>Dr.B.Arul Senthil</p>
        <p> Asssistant Professor</p>
        <p>OB &HR</p>
        <p>Jansons School of Business(Autonomous)</p>
        <p>Karumathampatti,Coimbatore-641659</p>
        <p>Tamilnadu</p>
        <p>Email: arulsenthil@jsb.ac.in</p>
      </div>

      {/* <div className="editor">
        <p>Dr.Iyappan</p>
        <p>Alliance University</p>
        <p>Chikkaahagade Cross</p>
        <p>Chandapura-Anekal Main Road,Anekal,Bengaluru-562 106</p>
        <p>Karnataka,India</p>
        <p>Email: abc</p>
      </div> */}

      {/* Add more editor details similarly */}
      <Footer />
    </div>
  );
}

export default EditorialBoard;
//const downloadFile = (filename) => {
  //   if (!filename) {
  //     console.error('Filename is undefined');
  //     return;
  //   }
  //   const fileUrl = `http://localhost:3000/files/${encodeURIComponent(filename)}`;
  //   const link = document.createElement('a');
  //   link.href = fileUrl;
  //   link.setAttribute('download', filename); // Suggests a filename to save as
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };