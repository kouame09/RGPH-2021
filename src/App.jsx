import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import PopulationChart from './components/PopulationChart';
import UrbanizationMap from './components/UrbanizationMap';
import ForeignPopulationTable from './components/ForeignPopulationTable';
import DemographicPieChart from './components/DemographicPieChart';
import AgeDistributionBar from './components/AgeDistributionBar';
import LiteracyRateChart from './components/LiteracyRateChart';
import ReligionsPieChart from './components/ReligionsPieChart';
import UrbanizationChart from './components/UrbanizationChart';
import FullPageWrapper from './components/FullPageWrapper';

function App() {

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
          <Route path="/urbanization-map" element={
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
          <Route path="/literacy" element={
            <FullPageWrapper title="Taux d'alphabétisation">
              <LiteracyRateChart isFullPage />
            </FullPageWrapper>
          } />
          <Route path="/religions" element={
            <FullPageWrapper title="Répartition des religions">
              <ReligionsPieChart isFullPage />
            </FullPageWrapper>
          } />
          <Route path="/urbanization" element={
            <FullPageWrapper title="Taux d'urbanisation">
              <UrbanizationChart isFullPage />
            </FullPageWrapper>
          } />
        </Routes>
        <footer className="bg-gray-100 mt-10">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl text-blue-500 font-bold mb-2 mt-8 text-center">
            RGPH 2021
              <span className="block text-sm font-normal mt-2">
                by{" "}
                <a
                  href="https://www.princekouame.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Prince Kouamé
                </a>
              </span>
            </h1>
          </div>
        </footer>
      </Layout>
    </Router>
  );
}

export default App;
