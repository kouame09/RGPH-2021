import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import PopulationChart from './components/PopulationChart';
import UrbanizationMap from './components/UrbanizationMap';
import ForeignPopulationTable from './components/ForeignPopulationTable';
import DemographicPieChart from './components/DemographicPieChart';
import AgeDistributionBar from './components/AgeDistributionBar';
import FullPageWrapper from './components/FullPageWrapper';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/population" element={
            <FullPageWrapper title="Évolution de la Population">
              <PopulationChart isFullPage />
            </FullPageWrapper>
          } />
          <Route path="/urbanization" element={
            <FullPageWrapper title="Carte d'Urbanisation">
              <UrbanizationMap isFullPage />
            </FullPageWrapper>
          } />
          <Route path="/foreign" element={
            <FullPageWrapper title="Population Étrangère">
              <ForeignPopulationTable isFullPage />
            </FullPageWrapper>
          } />
          <Route path="/demographic" element={
            <FullPageWrapper title="Répartition Démographique">
              <DemographicPieChart isFullPage />
            </FullPageWrapper>
          } />
          <Route path="/age" element={
            <FullPageWrapper title="Distribution par Âge">
              <AgeDistributionBar isFullPage />
            </FullPageWrapper>
          } />
        </Routes>
        <footer className="text-center mt-8 py-4 bg-gray-100">
          <p className="text-sm text-gray-600"> 
            © {currentYear} Recensement Général de la Population et de l’Habitat (RGPH 2021) | Développé avec <FaHeart className="inline text-red-500" /> par{' '}
            <a href="https://princekouame.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Prince Kouamé
            </a>
          </p>
        </footer>
      </Layout>
    </Router>
  );
}

export default App;