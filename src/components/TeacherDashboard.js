
import React, { useState } from 'react';

const TeacherDashboard = () => {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState('');

  const handleAddAssignment = () => {
    setAssignments([...assignments, newAssignment]);
    setNewAssignment('');
  };

  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Teacher Dashboard: Manage Assignments</h2>
      <input
        type="text"
        placeholder="New Assignment"
        className="p-2 border rounded mb-4"
        value={newAssignment}
        onChange={(e) => setNewAssignment(e.target.value)}
      />
      <button onClick={handleAddAssignment} className="bg-blue-500 text-white p-2 rounded">Add Assignment</button>

      <ul className="mt-4">
        {assignments.map((assignment, index) => (
          <li key={index} className="border p-2 mb-2 bg-white">{assignment}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherDashboard;
