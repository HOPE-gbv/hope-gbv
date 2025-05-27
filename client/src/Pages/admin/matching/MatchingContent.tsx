import React from 'react';

const MatchingContent: React.FC = () => {
  return (
    <div className="mt-4 p-4 border rounded-lg bg-gray-50">
      <h3 className="text-xl font-semibold mb-2">Matching Details</h3>
      <p>This content is loaded lazily for the matching page.</p>
      {/* Add actual matching content here */}
    </div>
  );
};

export default MatchingContent;
