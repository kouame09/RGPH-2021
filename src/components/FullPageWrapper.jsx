import React from 'react';

const FullPageWrapper = ({ children, title }) => {
  return (
    <div className="h-full p-6">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="h-[calc(100vh-200px)]">
        {children}
      </div>
    </div>
  );
};

export default FullPageWrapper;