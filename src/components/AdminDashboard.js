
import React, { useState } from 'react';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '', teacher: '', startDate: '', endDate: '' });

  const handleAddCourse = () => {
    setCourses([...courses, newCourse]);
    setNewCourse({ title: '', description: '', teacher: '', startDate: '', endDate: '' });
  };

  const handleDeleteCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard: Manage Courses</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Course Title"
          className="p-2 border rounded mr-2"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="p-2 border rounded mr-2"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Teacher"
          className="p-2 border rounded mr-2"
          value={newCourse.teacher}
          onChange={(e) => setNewCourse({ ...newCourse, teacher: e.target.value })}
        />
        <input
          type="date"
          className="p-2 border rounded mr-2"
          value={newCourse.startDate}
          onChange={(e) => setNewCourse({ ...newCourse, startDate: e.target.value })}
        />
        <input
          type="date"
          className="p-2 border rounded mr-2"
          value={newCourse.endDate}
          onChange={(e) => setNewCourse({ ...newCourse, endDate: e.target.value })}
        />
        <button onClick={handleAddCourse} className="bg-green-500 text-white p-2 rounded">Add Course</button>
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-300">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Teacher</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className="bg-white">
              <td className="border px-4 py-2">{course.title}</td>
              <td className="border px-4 py-2">{course.description}</td>
              <td className="border px-4 py-2">{course.teacher}</td>
              <td className="border px-4 py-2">{course.startDate}</td>
              <td className="border px-4 py-2">{course.endDate}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDeleteCourse(index)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
