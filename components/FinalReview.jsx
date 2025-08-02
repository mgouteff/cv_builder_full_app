import React from 'react';

const FinalReview = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div>
      <h2>Review Your CV</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FinalReview;
