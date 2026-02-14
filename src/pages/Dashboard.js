import React from 'react';
import { FaBookOpen, FaVideo, FaClipboardList, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'Student' };

  const stats = [
    { label: 'Exams Attempted', value: '12', icon: <FaClipboardList />, color: 'bg-blue-100 text-blue-600' },
    { label: 'Classes Watched', value: '45', icon: <FaVideo />, color: 'bg-purple-100 text-purple-600' },
    { label: 'Notes Downloaded', value: '08', icon: <FaBookOpen />, color: 'bg-green-100 text-green-600' },
    { label: 'Forum Rank', value: '#204', icon: <FaUsers />, color: 'bg-orange-100 text-orange-600' },
  ];

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-4xl font-black text-slate-800">Study Dashboard</h1>
        <p className="text-slate-500 mt-2 font-medium">Tracking your journey to success.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-5 shadow-sm">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-black text-slate-800">{stat.value}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Feature: Exam Hubs Access */}
      <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Universal Exam Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['SSC', 'GATE', 'NEET', 'UPSC', 'RAILWAY', 'JEE'].map(exam => (
            <button key={exam} className="py-4 border-2 border-slate-50 rounded-2xl font-black text-slate-400 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all uppercase tracking-tighter">
              {exam} Hub
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;