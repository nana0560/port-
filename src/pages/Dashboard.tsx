import React from 'react';
import { Book, Users, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard icon={<Book className="h-8 w-8" />} title="Enrolled Courses" value="5" />
        <DashboardCard icon={<Users className="h-8 w-8" />} title="Active Students" value="120" />
        <DashboardCard icon={<Clock className="h-8 w-8" />} title="Hours Learned" value="48" />
      </div>
    </div>
  );
};

const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-blue-600">{icon}</div>
        <span className="text-3xl font-bold">{value}</span>
      </div>
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
    </div>
  );
};

export default Dashboard;