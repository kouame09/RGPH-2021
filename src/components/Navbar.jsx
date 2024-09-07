import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdShowChart, MdMap, MdPeople, MdGroup, MdPieChart } from 'react-icons/md';

const NavItem = ({ to, icon, children, isExpanded }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`flex items-center py-2 px-4 rounded transition ${
        isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'
      }`}
    >
      {icon}
      {isExpanded && <span className="ml-3">{children}</span>}
    </Link>
  );
};

const Navbar = ({ isExpanded }) => {
  return (
    <nav className={`bg-white shadow-lg transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}>
      <div className="p-4">
        {isExpanded ? (
          <h1 className="text-xl font-bold">Démographie CI</h1>
        ) : (
          <MdDashboard size={24} className="mx-auto" />
        )}
      </div>
      <ul className="space-y-2 p-4">
        <li><NavItem to="/" icon={<MdDashboard size={20} />} isExpanded={isExpanded}>Tableau de Bord</NavItem></li>
        <li><NavItem to="/population" icon={<MdShowChart size={20} />} isExpanded={isExpanded}>Évolution de la Population</NavItem></li>
        <li><NavItem to="/urbanization" icon={<MdMap size={20} />} isExpanded={isExpanded}>Carte d'Urbanisation</NavItem></li>
        <li><NavItem to="/foreign" icon={<MdPeople size={20} />} isExpanded={isExpanded}>Population Étrangère</NavItem></li>
        <li><NavItem to="/demographic" icon={<MdGroup size={20} />} isExpanded={isExpanded}>Répartition Démographique</NavItem></li>
        <li><NavItem to="/age" icon={<MdPieChart size={20} />} isExpanded={isExpanded}>Distribution par Âge</NavItem></li>
      </ul>
    </nav>
  );
};

export default Navbar;