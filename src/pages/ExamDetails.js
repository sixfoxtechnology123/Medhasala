import React, { useState } from 'react';

const ExamDetails = () => {
  const [activeTab, setActiveTab] = useState('syllabus');

  return (
    <div className="space-y-6">
      {/* Exam Header */}
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex items-center space-x-4 mb-4">
          <span className="p-3 bg-blue-100 text-blue-600 rounded-2xl text-2xl font-bold">SSC</span>
          <h1 className="text-3xl font-black text-gray-900">SSC CGL 2026</h1>
        </div>
        <p className="text-gray-500 max-w-2xl">Staff Selection Commission - Combined Graduate Level Examination. Complete details, syllabus, and free study material.</p>
      </div>

      {/* Tabs like a Textbook Menu */}
      <div className="flex space-x-1 bg-gray-200 p-1 rounded-xl w-fit">
        {['Syllabus', 'Study Notes', 'Video Classes', 'Mock Exams'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === tab.toLowerCase() ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* List of Free Materials */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between hover:border-blue-200 transition-all cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500">
                  📄
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">General Intelligence & Reasoning - Part {item}</h4>
                  <p className="text-xs text-gray-400">PDF • 12 MB • Free Download</p>
                </div>
              </div>
              <button className="text-blue-600 font-bold text-sm">Open</button>
            </div>
          ))}
        </div>

        {/* Sidebar: Quick Links */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">Exam Schedule</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Notification:</span>
                <span className="font-semibold text-gray-800">Oct 2025</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tier 1 Exam:</span>
                <span className="font-semibold text-blue-600">March 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamDetails;