// src/pages/Listings.js
import React from "react";
import { Link } from "react-router-dom";
import students from "../data/students";
import "./Listings.scss";

const Listings = () => {
  console.log("Listings Page");
  return (
    <div className="listings">
      <h1>Student Listings</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>
              {student.firstName} {student.lastName} (Age: {student.age})
            </span>
            <Link to={`/details/${student.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
