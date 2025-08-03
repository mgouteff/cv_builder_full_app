// ✅ DFQ+ version: CVPreview – displays the formatted CV before final submission

import React from 'react';

const CVPreview = ({ formData, prevStep, nextStep }) => {
  return (
    <div className="cv-preview">
      <h2>CV Preview</h2>
      <p>Review your completed CV below before continuing.</p>

      {/* Personal Information Section */}
      <div className="preview-section">
        <h3>Personal Information</h3>
        <p><strong>First Name:</strong> {formData.personalInfo.firstName}</p>
        <p><strong>Last Name:</strong> {formData.personalInfo.lastName}</p>
        <p><strong>Email:</strong> {formData.personalInfo.email}</p>
        <p><strong>Phone:</strong> {formData.personalInfo.phone}</p>
        <p><strong>City:</strong> {formData.personalInfo.city}</p>
      </div>

      {/* Work Experience Section */}
      <div className="preview-section">
        <h3>Work Experience</h3>
        {formData.workExperience.map((job, index) => (
          <div key={index}>
            <p><strong>Job Title:</strong> {job.jobTitle}</p>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Start Date:</strong> {job.startDate}</p>
            <p><strong>End Date:</strong> {job.endDate}</p>
            <p><strong>Responsibilities:</strong> {job.responsibilities}</p>
            <hr />
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="preview-section">
        <h3>Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <p><strong>Degree:</strong> {edu.degree}</p>
            <p><strong>School:</strong> {edu.school}</p>
            <p><strong>Graduation Year:</strong> {edu.graduationYear}</p>
            <hr />
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="preview-section">
        <h3>Skills</h3>
        <p>{formData.skills}</p>
      </div>

      {/* Languages Section */}
      <div className="preview-section">
        <h3>Languages</h3>
        <p>{formData.languages}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="preview-buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Continue</button>
      </div>
    </div>
  );
};

export default CVPreview;
