import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const EnrollmentConfirmation = () => {
  const location = useLocation();
  const course = location.state?.course;

  if (!course) {
    return <div>No course information available</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Enrollment Confirmation</h1>
      <div className="mb-6">
        <p className="text-xl mb-2">Congratulations! You have successfully enrolled in:</p>
        <h2 className="text-2xl font-semibold text-blue-600">{course.title}</h2>
      </div>
      <div className="mb-6">
        <p className="mb-2"><strong>Instructor:</strong> {course.instructor}</p>
        <p className="mb-2"><strong>Duration:</strong> {course.duration}</p>
        <p className="mb-2"><strong>Level:</strong> {course.level}</p>
      </div>
      <p className="mb-6">
        You will receive an email with further instructions on how to access your course materials.
      </p>
      <div className="text-center">
        <Link
          to="/courses"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          Browse More Courses
        </Link>
      </div>
    </div>
  );
};

export default EnrollmentConfirmation;