import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout'; 
import Dashboard from './pages/Dashboard';
import Exams from './pages/Exams';
import Login from './pages/Login';
import Register from './pages/Register';
import Blogs from './pages/Blogs';
import Videos from './pages/Videos';
import Doubts from './pages/Doubts';
import AdminResources from './pages/AdminResources'; // Import the Admin page

function App() {
  // This state tracks which Exam (SSC, UPSC, etc.) the student clicked in the Sidebar
  const [selectedHub, setSelectedHub] = useState('SSC');

  return (
    <Router>
      <Routes>
        {/* Auth routes: No Sidebar/Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* App routes: Wrapped in Layout (Sidebar + Navbar) */}
        <Route
          path="/*"
          element={
            <Layout setSelectedHub={setSelectedHub} selectedHub={selectedHub}>
              <Routes>
                {/* We pass selectedHub as a prop to these pages so they filter content */}
                <Route path="/dashboard" element={<Dashboard selectedHub={selectedHub} />} />
                <Route path="/exams" element={<Exams selectedHub={selectedHub} />} />
                <Route path="/videos" element={<Videos selectedHub={selectedHub} />} />
                
                {/* The Blogs page acts as our Library for Syllabus and Notes */}
                <Route path="/blogs" element={<Blogs selectedHub={selectedHub} />} />
                
                <Route path="/doubts" element={<Doubts />} />

                {/* The Admin Upload Page */}
                <Route path="/admin/add-resource" element={<AdminResources />} />

                <Route path="/" element={<Navigate to="/dashboard" />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;