import React, { useState } from 'react';
import { FaDownload, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const Blogs = () => {
  const [filter, setFilter] = useState('All');

  const resources = [
    { id: 1, title: "SSC CGL 2026 Complete Syllabus", cat: "SSC", type: "Syllabus", size: "1.2 MB" },
    { id: 2, title: "Quantum Mechanics GATE Notes", cat: "GATE", type: "Notes", size: "15 MB" },
    { id: 3, title: "Daily Current Affairs - Feb 14", cat: "General", type: "PDF", size: "800 KB" },
    { id: 4, title: "Railway RRB NTPC Math Shortcuts", cat: "Railways", type: "Notes", size: "4.5 MB" },
    { id: 5, title: "NEET Biology: Human Anatomy Map", cat: "Medical", type: "Diagram", size: "8 MB" },
  ];

  const filteredData = filter === 'All' ? resources : resources.filter(r => r.cat === filter);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-10 text-white shadow-xl">
        <h1 className="text-4xl font-black mb-4">Free Resource Center</h1>
        <p className="text-blue-100 text-lg max-w-2xl">
          Access high-quality study notes, official syllabus PDFs, and previous year papers for all major government exams.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-3">
        {['All', 'SSC', 'GATE', 'Railways', 'Medical', 'General'].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${
              filter === btn 
              ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
              : 'bg-white border-gray-100 text-gray-500 hover:border-blue-200'
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl text-xl">
                <FaFilePdf />
              </div>
              <span className="text-xs font-black text-gray-300 uppercase tracking-widest">{item.cat}</span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            
            <div className="flex items-center text-gray-400 text-sm mb-6">
              <span className="bg-gray-100 px-2 py-1 rounded mr-2 text-[10px] font-bold">{item.type}</span>
              <span>{item.size}</span>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                <FaDownload className="text-sm" /> Download
              </button>
              <button className="w-12 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50">
                <FaExternalLinkAlt className="text-gray-400 text-xs" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;