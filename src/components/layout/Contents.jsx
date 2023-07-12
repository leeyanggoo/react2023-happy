import React from 'react';

const Contents = ({ children }) => {
  return (
    <main id="main" role="main">
      <h2 className="blind">본문</h2>
      {children}
    </main>
  );
};

export default Contents;
