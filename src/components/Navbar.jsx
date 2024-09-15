import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdShowChart,
  MdMap,
  MdPeople,
  MdGroup,
  MdPieChart,
  MdSchool,
  MdChurch,
  MdLocationCity,
} from "react-icons/md";

const NavItem = ({ to, icon, children, isExpanded, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center py-2 px-4 rounded transition ${
        isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"
      }`}
      onClick={onClick}
    >
      {icon}
      {isExpanded && <span className="ml-3">{children}</span>}
    </Link>
  );
};

const Navbar = ({ isExpanded, isMobile, onNavItemClick }) => {
  return (
    <nav
      className={`transition-all duration-300 ${
        isMobile
          ? "fixed inset-0 z-50 bg-black bg-opacity-50"
          : "bg-white shadow-lg"
      } ${isExpanded ? "w-64" : "w-20"}`}
    >
      <div
        className={`h-full ${
          isMobile && isExpanded
            ? "bg-white w-64"
            : isMobile
              ? "w-20 bg-white"
              : "w-full"
        }`}
      >
        <div className="p-4">
          {isExpanded ? (
            <h1 className="text-xl font-bold">Démographie CI</h1>
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/icon.png"}
              alt="Dashboard Icon"
              className="mx-auto"
              width={50}
              height={50}
            />
          )}
        </div>
        <ul className="space-y-2 p-4">
          <li>
            <NavItem
              to="/"
              icon={<MdDashboard size={20} />}
              isExpanded={isExpanded}
              onClick={onNavItemClick}
            >
              Tableau de Bord
            </NavItem>
          </li>
          <li>
            <NavItem
              to="/population"
              icon={<MdShowChart size={20} />}
              isExpanded={isExpanded}
              onClick={onNavItemClick}
            >
              Évolution de la Population
            </NavItem>
          </li>
          <li>
            <NavItem
              to="/urbanization-map"
              icon={<MdMap size={20} />}
              isExpanded={isExpanded}
              onClick={onNavItemClick}
            >
              Carte d'Urbanisation
            </NavItem>
          </li>
          <li>
            <NavItem
              to="/foreign"
              icon={<MdPeople size={20} />}
              isExpanded={isExpanded}
              onClick={onNavItemClick}
            >
              Population Étrangère
            </NavItem>
          </li>
          <li>
            <NavItem
              to="/demographic"
              icon={<MdGroup size={20} />}
              isExpanded={isExpanded}
              onClick={onNavItemClick}
            >
              Répartition Démographique
            </NavItem>
          </li>
          <li>
            <NavItem
              to="/age"
              icon={<MdPieChart size={20} />}
              isExpanded={isExpanded}
              onClick={onNavItemClick}
            >
              Distribution par Âge
            </NavItem>
          </li>
          <li>
            <NavItem
              to="/literacy"
              icon={<MdSchool size={20} />}
              isExpanded={isExpanded}
              onClick={onNavItemClick}
            >
              Taux d'alphabétisation
            </NavItem>
          </li>
          <li>
            <NavItem
              to="/religions"
              icon={<MdChurch size={20} />}
              isExpanded={isExpanded}
              onClick={onNavItemClick}
            >
              Répartition des religions
            </NavItem>
          </li>
          <li>
            <NavItem
              to="/urbanization"
              icon={<MdLocationCity size={20} />}
              isExpanded={isExpanded}
              onClick={onNavItemClick}
            >
              Taux d'urbanisation
            </NavItem>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
