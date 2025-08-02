import React from 'react';

const EducationForm = ({ data, onChange, nextStep, prevStep }) => {
  const handleChange = (index, e) => {
    const updated = [...data];
    updated[index][e.target.name] = e.target.value;
    onChange(updated);
  };

  return (
    <div>
      <h2>Education</h2>
      {data.map((edu, index) => (
        <div key={index}>
          <input name="school" placeholder="School" value={edu.school} onChange={(e) => handleChange(index, e)} />
          <input name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(index, e)} />
          <input name="startDate" placeholder="Start Date" value={edu.startDate} onChange={(e) => handleChange(index, e)} />
          <input name="endDate" placeholder="End Date" value={edu.endDate} onChange={(e) => handleChange(index, e)} />
          <textarea name="description" placeholder="Description" value={edu.description} onChange={(e) => handleChange(index, e)} />
        </div>
      ))}
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default EducationForm;
