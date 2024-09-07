import React from 'react';
import { motion } from 'framer-motion';
import PopulationChart from './PopulationChart';
import DemographicPieChart from './DemographicPieChart';
import UrbanizationMap from './UrbanizationMap';
import AgeDistributionBar from './AgeDistributionBar';
import ForeignPopulationTable from './ForeignPopulationTable';
import LiteracyRateChart from './LiteracyRateChart';
import ReligionsPieChart from './ReligionsPieChart';
import UrbanizationChart from './UrbanizationChart';

const Dashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold mb-6">Tableau de Bord Démographique de la Côte d'Ivoire (Extrait du RGPH 2021)</h1>
      
      <div className="grid grid-cols-1 gap-6">
        <PopulationChart />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <UrbanizationMap />
        </div>
        <div className="md:col-span-1">
          <ForeignPopulationTable/>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DemographicPieChart />
        <AgeDistributionBar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LiteracyRateChart />
        <ReligionsPieChart />
        <UrbanizationChart />
      </div>
    </motion.div>
  );
};

export default Dashboard;