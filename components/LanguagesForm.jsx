import React from 'react';

const LanguagesForm = ({ data, onChange, nextStep, prevStep }) => {
  const handleChange = (index, e) => {
    const updated = [...data];
    updated[index][e.target.name] = e.target.value;
    onChange(updated);
  };

  return (
    <div>
      <h2>Languages</h2>
      {data.map((lang, index) => (
        <div key={index}>
          <input name="language" placeholder="Language" value={lang.language} onChange={(e) => handleChange(index, e)} />
          <input name="proficiency" placeholder="Proficiency" value={lang.proficiency} onChange={(e) => handleChange(index, e)} />
        </div>
      ))}
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default LanguagesForm;
