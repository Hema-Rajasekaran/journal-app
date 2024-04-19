import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./archives.css";

function Archives() {
  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  // const getPdf = async () => {
  //   const result = await axios.get(
  //     `https://journal-app-eight-gold.vercel.app/get-files`
  //   );
  //   console.log(result.data.data);
  //   setAllImage(result.data.data);
  // };
  const getPdf = async () => {
    try {
      const response = await axios.get(
        `https://journal-app-eight-gold.vercel.app/get-files`
      );
      console.log(response.data); // Log the entire response for debugging
      setAllImage(response.data.data || []); // Assuming response structure is { data: [...] }
    } catch (error) {
      console.error("Error fetching PDFs:", error);
      // Handle error state here, such as setting an error message in state
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
          {allImage == null
            ? ""
            : allImage.map((data) => {
                return (
                  <div className="inner-div">
                    <h6>Title:{data.title}</h6>
                    <button
                      className="btn-btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Archives;
