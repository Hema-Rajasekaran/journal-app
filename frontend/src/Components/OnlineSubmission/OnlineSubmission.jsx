import "./OnlineSubmission.css";
import React, { useState } from "react";
import axios from "axios";
import Footer from "../Footer";

function OnlineSubmission() {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [corrA, setCorrA] = useState("");
  const [corrAE, setCorrAE] = useState("");
  const [mobile, setMobile] = useState("");
  const [pages, setPages] = useState(0);
  const [affiliation, setAffiliation] = useState("");
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCorrAChange = (event) => {
    setCorrA(event.target.value);
  };

  const handleCorrAEChange = (event) => {
    setCorrAE(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleAffiliationChange = (event) => {
    setAffiliation(event.target.value);
  };

  const handlePagesChange = (event) => {
    setPages(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("topic", topic);
    formData.append("title", title);
    formData.append("name", name);
    formData.append("corrA", corrA);
    formData.append("corrAE", corrAE);
    formData.append("mobile", mobile);
    formData.append("affiliation", affiliation);
    formData.append("pages", pages);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://journal-app-backend-3466.onrender.com/upload-files",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setSuccessMessage("File uploaded successfully!");
      // Reset form fields after successful submission
      setTopic("");
      setTitle("");
      setName("");
      setCorrA("");
      setCorrAE("");
      setMobile("");
      setPages(0);
      setAffiliation("");
      setFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error
    }
  };

  return (
    <div>
      <div className="goose">
        <h2>Submit Your Information</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="topic"> Topic / Domain:</label>
          <br />
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={handleTopicChange}
            required
          />
          <br />
          <br />

          <label htmlFor="title"> Title:</label>
          <br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="name"> Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <br />
          <br />

          <label htmlFor="corrA"> Corresponding Author Name:</label>
          <br />
          <input
            type="text"
            id="corrA"
            value={corrA}
            onChange={handleCorrAChange}
            required
          />
          <br />
          <br />

          <label htmlFor="corrAE"> Corresponding Email:</label>
          <br />
          <input
            type="email"
            id="corrAE"
            value={corrAE}
            onChange={handleCorrAEChange}
            required
          />
          <br />
          <br />

          <label htmlFor="mobile"> Mobile:</label>
          <br />
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={handleMobileChange}
            required
          />
          <br />
          <br />

          <label htmlFor="affiliation"> Affiliation:</label>
          <br />
          <input
            type="text"
            id="affiliation"
            value={affiliation}
            onChange={handleAffiliationChange}
            required
          />
          <br />
          <br />

          <label htmlFor="pages"> No. of Pages in Document:</label>
          <br />
          <input
            type="number"
            id="pages"
            value={pages}
            onChange={handlePagesChange}
            required
          />
          <br />
          <br />

          <label htmlFor="file">Attach Word File:</label>
          <br />
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept=".doc,.docx"
            required
          />
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>

        {/* Success Message Popup */}
        {successMessage && (
          <div className="success-message">
            <p>{successMessage}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default OnlineSubmission;
