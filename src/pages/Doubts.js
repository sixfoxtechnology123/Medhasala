import React, { useState } from 'react';
import { FaReply, FaArrowUp, FaCheckCircle, FaSearch } from 'react-icons/fa';

const Doubts = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      user: "Rahul S.",
      category: "SSC",
      text: "How to solve boat and stream problems quickly without formulas?",
      upvotes: 12,
      replies: 4,
      isResolved: true
    },
    {
      id: 2,
      user: "Priya M.",
      category: "Medical",
      text: "Can someone explain the difference between Mitosis and Meiosis in simple terms?",
      upvotes: 8,
      replies: 2,
      isResolved: false
    }
  ]);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header & Ask Question Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Doubt Forum</h1>
          <p className="text-gray-500 text-sm">Ask questions and learn from peers & teachers.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
          Ask a Doubt
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative group">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
        <input 
          type="text" 
          placeholder="Search for previous doubts (e.g. 'Geometry', 'Physics')..." 
          className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all outline-none"
        />
      </div>

      {/* Question List */}
      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                  {q.user[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{q.user}</h4>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-50 px-2 py-0.5 rounded">
                    {q.category}
                  </span>
                </div>
              </div>
              {q.isResolved && (
                <div className="flex items-center gap-1 text-green-500 text-xs font-bold">
                  <FaCheckCircle /> Resolved
                </div>
              )}
            </div>

            <p className="text-gray-700 font-medium text-lg leading-relaxed mb-6">
              {q.text}
            </p>

            <div className="flex items-center gap-6 border-t pt-4">
              <button className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-bold text-sm transition-colors">
                <FaArrowUp /> {q.upvotes}
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-bold text-sm transition-colors">
                <FaReply /> {q.replies} Replies
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doubts;