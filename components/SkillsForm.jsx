// components/SkillsForm.jsx
// ✅ DFQ+ rewrite: fully controlled inputs, guaranteed editable skills list

import React from "react";

const SkillsForm = ({ data, onChange, prevStep, nextStep }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange("skills", name, value);
  };

  return (
    <div>
      <h2>Skills</h2>

      <label>Skill 1:</label>
      <input
        type="text"
        name="skill1"
        value={data.skill1}
        onChange={handleInputChange}
      />

      <label>Skill 2:</label>
      <input
        type="text"
        name="skill2"
        value={data.skill2}
        onChange={handleInputChange}
      />

      <label>Skill 3:</label>
      <input
        type="text"
        name="skill3"
        value={data.skill3}
        onChange={handleInputChange}
      />

      <label>Skill 4:</label>
      <input
        type="text"
        name="skill4"
        value={data.skill4}
        onChange={handleInputChange}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default SkillsForm;
