import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { MdMenuOpen, MdClose } from 'react-icons/md';

const Layout = ({ children }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Ajustez cette valeur selon vos besoins
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {(!isMobile || (isMobile && isNavExpanded)) && (
        <Navbar isExpanded={isNavExpanded} />
      )}
      <div className="flex flex-col flex-1">
        <header className="bg-white shadow-sm p-4 flex items-center">
          <button
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isMobile && isNavExpanded ? <MdClose size={24} /> : <MdMenuOpen size={24} />}
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