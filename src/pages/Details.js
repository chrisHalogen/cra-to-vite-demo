// src/pages/Details.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import students from "../data/students";
import "./Details.scss";

const Details = () => {
  const { id } = useParams();
  const student = students.find((student) => student.id === parseInt(id));

  if (!student) return <p>Student not found</p>;

  return (
    <div className="details">
      <h1>
        {student.firstName} {student.lastName}
      </h1>
      <p>
        <strong>Age:</strong> {student.age}
      </p>
      <p>
        <strong>Bio:</strong> {student.bio}
      </p>
      <p>
        <strong>Nationality:</strong> {student.nationality}
      </p>
      <p>
        <strong>GPA:</strong> {student.gpa}
      </p>
      <p>
        <strong>Major:</strong> {student.major}
      </p>
      <p>
        <strong>Hobby:</strong> {student.hobby}
      </p>
      <p>
        <strong>Favorite Subject:</strong> {student.favoriteSubject}
      </p>
      <p>
        <strong>Email:</strong> {student.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {student.phoneNumber}
      </p>
      <Link to="/" className="back-link">
        Back to Listings
      </Link>
    </div>
  );
};

export default Details;
