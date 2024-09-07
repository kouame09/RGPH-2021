import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { populationData } from '../data/populationData';

const PopulationChart = ({ isFullPage = false }) => {
  const data = populationData.populationGrowth;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${isFullPage ? 'h-full' : ''}`}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Évolution de la Population</h2>
      <ResponsiveContainer width="100%" height={isFullPage ? "90%" : 300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="year" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }} />
          <Legend />
          <Line type="monotone" dataKey="population" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default PopulationChart;