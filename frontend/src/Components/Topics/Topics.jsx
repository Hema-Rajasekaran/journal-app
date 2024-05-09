import React from "react";
import "./topic.css";

const topics = [
  "English",
  "Mathematics",
  "Education Sciences",
  "Pharmacy",
  "Nursing",
  "Applied Science",
  "Food Science",
  "Life Science",
  "Paramedical Science",
  "Energy & Environment Science",
  "Earth Sciences",
  "Medical science",
  "Humanities and Science",
  "Yoga",
  "Applied Physics",
  "Applied Chemistry",
  "Social Research",
  "Architecture",
  "Engineering",
  "Technology",
  "Management",
];

const Topic = () => {
  return (
    <div className="topic-container">
      <h2>Topics</h2>
      <ul className="topic-list">
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Topic;
