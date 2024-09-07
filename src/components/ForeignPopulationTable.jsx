import React from 'react';
import { motion } from 'framer-motion';
import { populationData } from '../data/populationData';

const ForeignPopulationTable = ({ isFullPage = false }) => {
  const foreignData = populationData.foreignPopulation.breakdown;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg ${isFullPage ? 'h-full flex flex-col' : ''}`}
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Population Étrangère</h2>
      <div className={`overflow-x-auto ${isFullPage ? 'flex-grow' : ''}`}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pays</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Population</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {foreignData.map((item) => (
              <tr key={item.country} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{item.country}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.population.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ForeignPopulationTable;