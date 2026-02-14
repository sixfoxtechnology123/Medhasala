import React, { useState } from 'react';
import axios from 'axios';

const AdminResources = () => {
  const [formData, setFormData] = useState({
    examCategory: 'SSC',
    resourceType: 'Syllabus',
    title: '',
    description: '',
    fileUrl: '',
    videoUrl: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/resources/add', formData, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      alert('Content Added to Encyclopedia!');
      setFormData({ ...formData, title: '', description: '', fileUrl: '', videoUrl: '' });
    } catch (err) {
      alert('Error: Make sure you are logged in as Admin');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
        <h2 className="text-3xl font-black text-slate-800 mb-2">Resource Manager</h2>
        <p className="text-slate-400 mb-8 font-medium">Upload syllabus, notes, or video links to the Exam Hubs.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase mb-2">Exam Category</label>
              <select 
                className="w-full p-4 bg-slate-50 rounded-2xl outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500"
                value={formData.examCategory}
                onChange={(e) => setFormData({...formData, examCategory: e.target.value})}
              >
                <option value="SSC">SSC CGL/CHSL</option>
                <option value="RAILWAYS">Railways RRB</option>
                <option value="UPSC">UPSC/IAS</option>
                <option value="MEDICAL">NEET/AIIMS</option>
                <option value="GATE">GATE/PSU</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase mb-2">Resource Type</label>
              <select 
                className="w-full p-4 bg-slate-50 rounded-2xl outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500"
                value={formData.resourceType}
                onChange={(e) => setFormData({...formData, resourceType: e.target.value})}
              >
                <option value="Syllabus">Official Syllabus</option>
                <option value="Notes">Study Notes (PDF)</option>
                <option value="Video">Video Class (YouTube)</option>
                <option value="PrevPaper">Previous Year Paper</option>
              </select>
            </div>
          </div>

          <input 
            type="text" placeholder="Title (e.g. SSC Math Full Syllabus 2026)" 
            className="w-full p-4 bg-slate-50 rounded-2xl ring-1 ring-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />

          <textarea 
            placeholder="Brief description of the material..." 
            className="w-full p-4 bg-slate-50 rounded-2xl ring-1 ring-slate-200 h-32 outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />

          <input 
            type="text" placeholder="URL Link (Google Drive PDF / YouTube Link)" 
            className="w-full p-4 bg-slate-50 rounded-2xl ring-1 ring-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.fileUrl}
            onChange={(e) => setFormData({...formData, fileUrl: e.target.value})}
          />

          <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all">
            Upload to Hub
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminResources;