// ✅ DFQ+ version: CaseSevenComponent – restart screen for creating a new CV

import React from 'react';

const CaseSevenComponent = ({ onRestart }) => {
  return (
    <div className="case-seven">
      <h2>✅ Your CV has been successfully submitted!</h2>
      <p>You can now close this window or start a new CV.</p>
      
      {/* Restart button sends user back to Step 1 */}
      <button onClick={onRestart}>Start a New CV</button>
    </div>
  );
};

export default CaseSevenComponent;
