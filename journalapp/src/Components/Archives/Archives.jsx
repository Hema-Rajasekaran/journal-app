import React, { useState, useEffect } from "react";
import axios from "axios";
import "./archives.css";

function Archives() {
  const [allImage, setAllImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const response = await axios.get(
        `https://journal-app-eight-gold.vercel.app/get-files`
      );
      if (response.data.status === "error") {
        throw new Error("Error fetching PDFs.");
      }
      setAllImage(response.data.data || []);
    } catch (error) {
      console.error("Error fetching PDFs:", error.message);
      setError("Error fetching PDFs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const showPdf = (pdf) => {
    window.open(
      `https://journal-app-eight-gold.vercel.app/files/${pdf}`,
      "_blank",
      "noreferrer"
    );
  };

  return (
    <div>
      <div className="uploaded">
        <div className="output-div">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : allImage.length === 0 ? (
            <p>No PDFs found.</p>
          ) : (
            allImage.map((data) => (
              <div className="inner-div" key={data._id}>
                <h6>Title: {data.title}</h6>
                <button
                  className="btn-btn-primary"
                  onClick={() => showPdf(data.pdf)}
                >
                  Show Pdf
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Archives;
