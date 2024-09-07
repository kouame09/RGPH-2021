import React, { useState } from 'react';
import Navbar from './Navbar';
import { MdMenuOpen } from 'react-icons/md';

const Layout = ({ children }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false); // Initialiser à false pour que la navbar soit pliée par défaut

  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar isExpanded={isNavExpanded} />
      <div className="flex flex-col flex-1">
        <header className="bg-white shadow-sm p-4 flex items-center">
          <button
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <MdMenuOpen size={24} />
          </button>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;