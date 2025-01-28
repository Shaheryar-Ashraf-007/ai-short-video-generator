
import React from 'react';
import Navbar from './_components/Navbar';
import Sidebar from './_components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children} {/* Correctly rendering children */}
    </div>
  );
};

export default Layout;