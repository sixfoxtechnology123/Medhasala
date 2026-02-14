import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaGavel, FaTrain, FaUserGraduate, FaHospital, FaBook, 
  FaThLarge, FaPenNib, FaVideo, FaFileAlt, FaComments, FaUserCog, FaChevronRight 
} from 'react-icons/fa';

const Sidebar = ({ setSelectedHub, selectedHub }) => {
  const location = useLocation();

  const hubs = [
    { id: 'SSC', name: 'SSC CGL / CHSL', icon: <FaUserGraduate />, color: 'bg-blue-500' },
    { id: 'RAILWAYS', name: 'Railway RRB', icon: <FaTrain />, color: 'bg-emerald-500' },
    { id: 'UPSC', name: 'UPSC / IAS', icon: <FaGavel />, color: 'bg-amber-500' },
    { id: 'MEDICAL', name: 'NEET / AIIMS', icon: <FaHospital />, color: 'bg-rose-500' },
    { id: 'GATE', name: 'GATE / PSU', icon: <FaBook />, color: 'bg-indigo-500' },
  ];

  const menuItems = [
    { name: 'Home Dashboard', path: '/dashboard', icon: <FaThLarge /> },
    { name: 'Mock Test Series', path: '/exams', icon: <FaPenNib /> },
    { name: 'Video Lectures', path: '/videos', icon: <FaVideo /> },
    { name: 'Study Library', path: '/blogs', icon: <FaFileAlt /> },
    { name: 'Doubt Forum', path: '/doubts', icon: <FaComments /> },
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-screen flex flex-col overflow-hidden">
      
      {/* Brand & Identity */}
      <div className="p-10">
        <h1 className="text-3xl font-black text-gray-900 tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm italic">M</span>
          MedhaShala
        </h1>
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-2">The Govt Exam Encyclopedia</p>
      </div>

      {/* Primary Navigation */}
      <div className="px-6 mb-8 flex-1 overflow-y-auto">
        <div className="mb-8">
            <h3 className="px-4 text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-widest">Platform</h3>
            <nav className="space-y-1">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link 
                            key={item.path}
                            to={item.path}
                            className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${
                                isActive 
                                ? 'bg-gray-900 text-white shadow-lg' 
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-lg">{item.icon}</span>
                                <span className="font-bold text-sm">{item.name}</span>
                            </div>
                            {isActive && <FaChevronRight className="text-[10px] opacity-30" />}
                        </Link>
                    );
                })}
            </nav>
        </div>

        {/* Hub Selection (Encyclopedia Filter) */}
        <div>
            <h3 className="px-4 text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-widest">Encyclopedia Hubs</h3>
            <div className="grid grid-cols-1 gap-2">
                {hubs.map((hub) => {
                    const isSelected = selectedHub === hub.id;
                    return (
                        <button 
                            key={hub.id}
                            onClick={() => setSelectedHub(hub.id)}
                            className={`relative flex items-center p-3 rounded-2xl transition-all border-2 ${
                                isSelected 
                                ? 'border-blue-600 bg-blue-50/50' 
                                : 'border-transparent bg-white hover:bg-gray-50'
                            }`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${hub.color} shadow-inner`}>
                                {hub.icon}
                            </div>
                            <div className="ml-4 text-left">
                                <p className={`text-sm font-bold ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>{hub.name}</p>
                                <p className="text-[10px] text-gray-400 font-medium">Resources & Notes</p>
                            </div>
                            {isSelected && (
                                <div className="absolute -left-1 w-1.5 h-6 bg-blue-600 rounded-full" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
      </div>

      {/* Admin Quick Action */}
      <div className="p-6 bg-gray-50/50 border-t border-gray-100">
        <Link 
          to="/admin/add-resource"
          className="flex items-center gap-3 w-full bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center text-sm">
            <FaUserCog />
          </div>
          <div>
            <p className="text-xs font-black text-gray-900">Admin Panel</p>
            <p className="text-[10px] text-gray-400">Update Encyclopedia</p>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default Sidebar;