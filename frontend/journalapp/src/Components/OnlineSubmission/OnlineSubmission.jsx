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
  const [affiliation, setAffiliation] = useState("");
  //   const [address, setAddress] = useState("");
  const [file, setFile] = useState(null);

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
  //   const handleAddressChange = (event) => {
  //     setAddress(event.target.files[0]);
  //   };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("Topic", topic);
    formData.append("title", title);
    formData.append("name", name);
    formData.append("corrA", corrA);
    formData.append("corrAE", corrAE);
    formData.append("mobile", mobile);
    formData.append("affiliation", affiliation);

    formData.append("file", file);
    console.log(topic, title, name, corrA, corrAE, mobile, affiliation, file);
    const result = await axios.post(
      "https://journal-jwz0squyw-hema-rs-projects.vercel.app/upload-files",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log(result);

    // fetch("/submit", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
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
            id="name"
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
          <textarea
            id="message"
            value={name}
            onChange={handleNameChange}
            required
          />
          <br />
          <br />

          <label htmlFor="corrA"> Corresponding Author Name:</label>
          <br />
          <textarea
            id="message"
            value={corrA}
            onChange={handleCorrAChange}
            required
          />
          <br />
          <br />

          <label htmlFor="corrA"> Corresponding EmailName:</label>
          <br />
          <textarea
            id="message"
            value={corrAE}
            onChange={handleCorrAEChange}
            required
          />
          <br />
          <br />

          <label htmlFor="mobile"> Mobile:</label>
          <br />
          <textarea
            type="tel"
            id="mobile"
            value={mobile}
            onChange={handleMobileChange}
            required
          />

          <br />
          <br />

          <label htmlFor="affiliation">
            {" "}
            Affiliation address of the Corresponding Author
          </label>
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

          <label htmlFor="file">Attach PDF File:</label>
          <br />
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept=".pdf"
            required
            aria-label=".PDF Only"
          />
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default OnlineSubmission;
