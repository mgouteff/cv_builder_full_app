// Main application file for CV Builder
// Handles navigation between multi-step forms and manages global state.

import React, { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoForm';
import WorkExperienceForm from './components/WorkExperienceForm';
import EducationForm from './components/EducationForm';
import SkillsForm from './components/SkillsForm';
import LanguagesForm from './components/LanguagesForm';
import FinalReview from './components/FinalReview';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      country: ''
    },
    workExperience: [
      { jobTitle: '', company: '', startDate: '', endDate: '', responsibilities: '' }
    ],
    education: [
      { school: '', degree: '', startDate: '', endDate: '', description: '' }
    ],
    skills: [],
    languages: [
      { language: '', proficiency: '' }
    ]
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (section, value) => {
    setFormData({
      ...formData,
      [section]: value
    });
  };

  const handleSubmit = () => {
    console.log('Final CV Data:', formData);
    alert('CV submitted successfully!');
  };

  return (
    <div>
      {step === 1 && <PersonalInfoForm data={formData.personalInfo} onChange={(value) => handleChange('personalInfo', value)} nextStep={nextStep} />}
      {step === 2 && <WorkExperienceForm data={formData.workExperience} onChange={(value) => handleChange('workExperience', value)} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <EducationForm data={formData.education} onChange={(value) => handleChange('education', value)} nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <SkillsForm data={formData.skills} onChange={(value) => handleChange('skills', value)} nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <LanguagesForm data={formData.languages} onChange={(value) => handleChange('languages', value)} nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <FinalReview formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default App;
