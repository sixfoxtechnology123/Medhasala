import React, { useState } from 'react';

const ExamInterface = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const questions = Array(20).fill(0); // Mock data

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Exam Area */}
      <div className="flex-1 flex flex-col p-6">
        <div className="bg-white rounded-lg shadow-sm flex-1 p-8 flex flex-col">
          <div className="flex justify-between border-b pb-4 mb-6">
            <span className="text-lg font-bold text-gray-700">Question {currentQ + 1}</span>
            <div className="text-red-500 font-mono text-xl font-bold">Time Left: 45:12</div>
          </div>

          <div className="flex-1">
            <p className="text-xl text-gray-800 mb-8 font-medium">What is the primary function of the Mitochondria in a cell?</p>
            <div className="space-y-4">
              {['Energy Production', 'Protein Synthesis', 'Waste Management', 'DNA Replication'].map((opt, i) => (
                <label key={i} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50 transition border-gray-200">
                  <input type="radio" name="option" className="h-4 w-4 text-blue-600" />
                  <span className="ml-4 text-gray-700">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t">
            <button className="px-6 py-2 border rounded-md font-semibold text-gray-600 hover:bg-gray-50">Mark for Review</button>
            <div className="space-x-4">
              <button className="px-6 py-2 bg-gray-200 rounded-md font-semibold" onClick={() => setCurrentQ(q => Math.max(0, q-1))}>Previous</button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-bold" onClick={() => setCurrentQ(q => q+1)}>Save & Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar: Palette */}
      <div className="w-80 bg-white border-l p-6 shadow-xl hidden lg:block">
        <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Question Palette</h3>
        <div className="grid grid-cols-5 gap-2">
          {questions.map((_, i) => (
            <button 
              key={i} 
              className={`w-10 h-10 rounded text-sm font-bold flex items-center justify-center border 
                ${currentQ === i ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setCurrentQ(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        
        <div className="mt-12 space-y-4">
          <div className="flex items-center text-xs"><div className="w-4 h-4 bg-green-500 mr-2 rounded"></div> Answered</div>
          <div className="flex items-center text-xs"><div className="w-4 h-4 bg-purple-500 mr-2 rounded"></div> Marked for Review</div>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold mt-8 hover:bg-green-700">Submit Exam</button>
        </div>
      </div>
    </div>
  );
};

export default ExamInterface;