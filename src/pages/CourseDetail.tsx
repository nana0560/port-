import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Book, Award } from 'lucide-react';

const courses = [
  { id: 1, title: 'Introduction to React', instructor: 'John Doe', description: 'Learn the basics of React and build your first application.', duration: '6 weeks', lessons: 24, level: 'Beginner' },
  { id: 2, title: 'Advanced JavaScript', instructor: 'Jane Smith', description: 'Master advanced JavaScript concepts and become a pro developer.', duration: '8 weeks', lessons: 32, level: 'Advanced' },
  { id: 3, title: 'Web Design Fundamentals', instructor: 'Mike Johnson', description: 'Discover the principles of great web design and user experience.', duration: '4 weeks', lessons: 16, level: 'Beginner' },
  { id: 4, title: 'Python for Beginners', instructor: 'Sarah Brown', description: 'Start your journey into programming with Python, a versatile language.', duration: '6 weeks', lessons: 24, level: 'Beginner' },
];

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleEnroll = () => {
    // Here you would typically handle the enrollment process
    // For now, we'll just navigate to the enrollment confirmation page
    navigate('/enrollment-confirmation', { state: { course } });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-600 mb-6">Instructor: {course.instructor}</p>
      <p className="text-lg mb-6">{course.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center">
          <Clock className="h-6 w-6 text-blue-600 mr-2" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center">
          <Book className="h-6 w-6 text-blue-600 mr-2" />
          <span>{course.lessons} lessons</span>
        </div>
        <div className="flex items-center">
          <Award className="h-6 w-6 text-blue-600 mr-2" />
          <span>{course.level}</span>
        </div>
      </div>
      <button 
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
        onClick={handleEnroll}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetail;