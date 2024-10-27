import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'Introduction to React', instructor: 'John Doe', image: 'https://source.unsplash.com/random/800x600?react' },
  { id: 2, title: 'Advanced JavaScript', instructor: 'Jane Smith', image: 'https://source.unsplash.com/random/800x600?javascript' },
  { id: 3, title: 'Web Design Fundamentals', instructor: 'Mike Johnson', image: 'https://source.unsplash.com/random/800x600?webdesign' },
  { id: 4, title: 'Python for Beginners', instructor: 'Sarah Brown', image: 'https://source.unsplash.com/random/800x600?python' },
];

const Courses = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600">Instructor: {course.instructor}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;