import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight text-blue-400">
              MEDHA<span className="text-white">SHALA</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link component={Link} to="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
            <Link to="/exams" className="hover:text-blue-400 transition">Exams</Link>
            <Link to="/blogs" className="hover:text-blue-400 transition">News</Link>
            
            {user?.role === 'teacher' && (
              <Link to="/manage" className="bg-blue-600 px-3 py-1 rounded text-sm font-medium">Teacher Console</Link>
            )}

            {user ? (
              <button onClick={handleLogout} className="text-gray-300 hover:text-white border border-gray-600 px-3 py-1 rounded">Logout</button>
            ) : (
              <Link to="/login" className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;