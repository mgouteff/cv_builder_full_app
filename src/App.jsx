// App.jsx
// Full version for CV Builder with debugging logs and persistent data across steps

import React, { useState } from 'react';
import PersonalInfoForm from './src/components/PersonalInfoForm';
import WorkExperienceForm from './src/components/WorkExperienceForm';
import EducationForm from './src/components/EducationForm';
import SkillsForm from './src/components/SkillsForm';
import LanguagesForm from './src/components/LanguagesForm';
import FinalReview from './src/components/FinalReview';

const App = () => {
  // Initial data structure, flat fields and arrays for work experience, education, and languages
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    country: '',
    workExperience: [{ jobTitle: '', company: '', startDate: '', endDate: '', responsibilities: '' }],
    education: [{ school: '', degree: '', startDate: '', endDate: '', description: '' }],
    skills: [],
    languages: [{ language: '', proficiency: '' }],
  });

  const [step, setStep] = useState(1);

  // Handle form data changes and ensure it persists through each step
  const handleChange = (updatedData) => {
    console.log("Updated formData:", updatedData);  // Log updated data
    setFormData(updatedData);
  };

  // Navigation between steps
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // Render the form step based on the current step
  const renderStep = () => {
    console.log("Current step:", step);  // Log current step for debugging

    switch (step) {
      case 1:
        return (
          <PersonalInfoForm
            data={formData}
            onChange={handleChange}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <WorkExperienceForm
            data={formData.workExperience}
            onChange={(updated) => handleChange({ ...formData, workExperience: updated })}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <EducationForm
            data={formData.education}
            onChange={(updated) => handleChange({ ...formData, education: updated })}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <SkillsForm
            data={formData.skills}
            onChange={(updated) => handleChange({ ...formData, skills: updated })}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return (
          <LanguagesForm
            data={formData.languages}
            onChange={(updated) => handleChange({ ...formData, languages: updated })}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 6:
        return (
          <FinalReview
            data={formData}
            prevStep={prevStep}
          />
        );
      case 7:
        return (
          <div>
            <h2>Submit Your CV</h2>
            <button onClick={prevStep}>Back</button>
            <button>Submit</button>  {/* Implement submission logic if required */}
          </div>
        );
      default:
        return <div>All steps completed!</div>;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

export default App;
