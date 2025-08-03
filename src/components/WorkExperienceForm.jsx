// WorkExperienceForm.jsx
// Handles user's work experience details.
// Updated to use flat data structure and prevent blank screen errors.

import React from 'react';

const WorkExperienceForm = ({ data, onChange, nextStep, prevStep }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Updating Work Experience field:", name, "with value:", value);
    onChange({
      ...data,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <input
        name="jobTitle"
        placeholder="Job Title"
        value={data.jobTitle || ''}
        onChange={handleChange}
      />
      <input
        name="company"
        placeholder="Company"
        value={data.company || ''}
        onChange={handleChange}
      />
      <input
        name="startDate"
        placeholder="Start Date"
        value={data.startDate || ''}
        onChange={handleChange}
      />
      <input
        name="endDate"
        placeholder="End Date"
        value={data.endDate || ''}
        onChange={handleChange}
      />
      <textarea
        name="responsibilities"
        placeholder="Responsibilities"
        value={data.responsibilities || ''}
        onChange={handleChange}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default WorkExperienceForm;
