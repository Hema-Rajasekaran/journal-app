import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './archives.css';

function Archives() {
  const [allFiles, setAllFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('https://journal-app-backend-3466.onrender.com/get-files');
      setAllFiles(response.data.data);
    } catch (error) {
      console.error('Error fetching files:', error);
      setError('Failed to fetch files');
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = async (filename) => {
    const fileUrl = `https://journal-app-backend-3466.onrender.com/files/${filename}`;
    console.log("Trying to download file from:", fileUrl); // Check the URL is correct
    console.log(filename);
    try {
      const response = await axios.get(fileUrl, { responseType: "blob" });
      const blob = new Blob([response.data], { type: response.data.type });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${filename}.docx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
    }
  };
  return (
    <div className="uploaded">
      <div className="output-div">
        {loading ? (
          <p>Loading files...</p>
        ) : error ? (
          <p>{error}</p>
        ) : allFiles.length > 0 ? (
          allFiles.map(file => (
            <div className="inner-div" key={file._id}>
              <h6>Title: {file.title}</h6>
              <button
                className="btn-download"
                onClick={() => downloadFile(file.word)}
              >
                <FontAwesomeIcon icon={faDownload} /> Download File
              </button>
            </div>
          ))
        ) : (
          <p>No files available</p>
        )}
      </div>
    </div>
  );
}

export default Archives;
