
import React, { useState } from 'react';

const StudentDashboard = () => {
  const [submittedAssignment, setSubmittedAssignment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitAssignment = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Student Dashboard: Submit Assignments</h2>
      {!isSubmitted ? (
        <div>
          <input
            type="text"
            placeholder="Submit Assignment"
            className="p-2 border rounded mb-4"
            value={submittedAssignment}
            onChange={(e) => setSubmittedAssignment(e.target.value)}
          />
          <button onClick={handleSubmitAssignment} className="bg-green-500 text-white p-2 rounded">Submit</button>
        </div>
      ) : (
        <p className="text-green-500">Assignment Submitted!</p>
      )}
    </div>
  );
};

export default StudentDashboard;
