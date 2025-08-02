import React from 'react';

const SkillsForm = ({ data, onChange, nextStep, prevStep }) => {
  const handleChange = (e) => {
    onChange(e.target.value.split(','));
  };

  return (
    <div>
      <h2>Skills</h2>
      <input placeholder="Enter skills separated by commas" value={data.join(',')} onChange={handleChange} />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default SkillsForm;
