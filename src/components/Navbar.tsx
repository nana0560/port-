import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, UserPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-xl font-bold">LMS</span>
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-200">Dashboard</Link>
            <Link to="/courses" className="hover:text-blue-200">Courses</Link>
            <Link to="/register" className="flex items-center hover:text-blue-200">
              <UserPlus className="h-5 w-5 mr-1" />
              <span>Register</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;