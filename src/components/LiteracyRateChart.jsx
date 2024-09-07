import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { populationData } from '../data/populationData';

const LiteracyRateChart = ({ isFullPage = false }) => {
  const data = [
    { name: 'Taux global', rate: populationData.literacy.overall },
    { name: 'Taux rural', rate: populationData.literacy.rural }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white p-6 rounded-xl shadow-lg ${isFullPage ? 'h-full' : ''}`}
    >
      <h2 className="text-2xl font-semibold mb-4">Taux d'alphabétisation</h2>
      <ResponsiveContainer width="100%" height={isFullPage ? "90%" : 300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="rate" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default LiteracyRateChart;