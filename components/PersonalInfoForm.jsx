// PersonalInfoForm.jsx
// Handles user's basic information entry.
// Ensures all fields are editable and state persists across re-renders.

import React from 'react';

const PersonalInfoForm = ({ data, onChange, nextStep }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Updating field:", name, "with value:", value);
    onChange({
      ...data,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <input
        name="firstName"
        placeholder="First Name"
        value={data.firstName || ''}
        onChange={handleChange}
      />
      <input
        name="lastName"
        placeholder="Last Name"
        value={data.lastName || ''}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={data.email || ''}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone"
        value={data.phone || ''}
        onChange={handleChange}
      />
      <input
        name="city"
        placeholder="City"
        value={data.city || ''}
        onChange={handleChange}
      />
      <input
        name="country"
        placeholder="Country"
        value={data.country || ''}
        onChange={handleChange}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default PersonalInfoForm;
