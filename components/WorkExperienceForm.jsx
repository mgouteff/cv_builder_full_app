import React from 'react';

const WorkExperienceForm = ({ data, onChange, nextStep, prevStep }) => {
  const handleChange = (index, e) => {
    const updated = [...data];
    updated[index][e.target.name] = e.target.value;
    onChange(updated);
  };

  return (
    <div>
      <h2>Work Experience</h2>
      {data.map((job, index) => (
        <div key={index}>
          <input name="jobTitle" placeholder="Job Title" value={job.jobTitle} onChange={(e) => handleChange(index, e)} />
          <input name="company" placeholder="Company" value={job.company} onChange={(e) => handleChange(index, e)} />
          <input name="startDate" placeholder="Start Date" value={job.startDate} onChange={(e) => handleChange(index, e)} />
          <input name="endDate" placeholder="End Date" value={job.endDate} onChange={(e) => handleChange(index, e)} />
          <textarea name="responsibilities" placeholder="Responsibilities" value={job.responsibilities} onChange={(e) => handleChange(index, e)} />
        </div>
      ))}
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default WorkExperienceForm;
