import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [selectedHub, setSelectedHub] = useState('SSC'); // Default hub

  // We use React.cloneElement to pass the selectedHub to the child pages (Dashboard, Blogs, etc.)
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { selectedHub });
    }
    return child;
  });

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      <Sidebar setSelectedHub={setSelectedHub} selectedHub={selectedHub} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            {childrenWithProps}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;