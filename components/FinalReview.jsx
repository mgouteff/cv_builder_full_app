// FinalReview.jsx
// ----------------------------
// Purpose: Displays all collected CV data for the user to review before submission.
// Props:
// - formData: Object containing all CV fields entered in previous steps
// - handleBack: Function to navigate to the previous step
// - handleSubmit: Function to finalize and submit CV data
//
// Notes:
// - All field names remain 100% unchanged (Rule 60, Rule 55).
// - Defensive checks prevent undefined errors.
// - Inline console logs track data flow for debugging.

import React from "react";

const FinalReview = ({ formData, handleBack, handleSubmit }) => {
  console.log("🔎 FinalReview Loaded - formData:", formData);

  // Defensive defaults to avoid undefined errors
  const {
    personalInfo = {},
    location = {},
    experience = [],
    education = [],
    skills = [],
    languages = [],
  } = formData || {};

  return (
    <div className="final-review-container">
      <h2>Final Review</h2>
      <p>Please review your CV details below before submission.</p>

      {/* Personal Information */}
      <section>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> {personalInfo.name || "Not provided"}</p>
        <p><strong>Email:</strong> {personalInfo.email || "Not provided"}</p>
        <p><strong>Phone:</strong> {personalInfo.phone || "Not provided"}</p>
      </section>

      {/* Location */}
      <section>
        <h3>Location</h3>
        <p><strong>Street:</strong> {location.street || "Not provided"}</p>
        <p><strong>City:</strong> {location.city || "Not provided"}</p>
        <p><strong>Country:</strong> {location.country || "Not provided"}</p>
      </section>

      {/* Experience */}
      <section>
        <h3>Work Experience</h3>
        {experience.length > 0 ? (
          experience.map((job, index) => (
            <div key={index}>
              <p><strong>Job Title:</strong> {job.jobTitle || "Not provided"}</p>
              <p><strong>Company:</strong> {job.company || "Not provided"}</p>
              <p><strong>Start Date:</strong> {job.startDate || "Not provided"}</p>
              <p><strong>End Date:</strong> {job.endDate || "Not provided"}</p>
              <p><strong>Responsibilities:</strong> {job.responsibilities || "Not provided"}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No experience provided</p>
        )}
      </section>

      {/* Education */}
      <section>
        <h3>Education</h3>
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index}>
              <p><strong>School:</strong> {edu.school || "Not provided"}</p>
              <p><strong>Degree:</strong> {edu.degree || "Not provided"}</p>
              <p><strong>Start Date:</strong> {edu.startDate || "Not provided"}</p>
              <p><strong>End Date:</strong> {edu.endDate || "Not provided"}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No education provided</p>
        )}
      </section>

      {/* Skills */}
      <section>
        <h3>Skills</h3>
        {skills.length > 0 ? (
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p>No skills provided</p>
        )}
      </section>

      {/* Languages */}
      <section>
        <h3>Languages</h3>
        {languages.length > 0 ? (
          <ul>
            {languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        ) : (
          <p>No languages provided</p>
        )}
      </section>

      {/* Navigation Buttons */}
      <div className="button-container">
        <button onClick={handleBack}>Back</button>
        <button onClick={() => { console.log("✅ Submitting CV:", formData); handleSubmit(); }}>
          Submit CV
        </button>
      </div>
    </div>
  );
};

export default FinalReview;
