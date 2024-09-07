import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { populationData } from '../data/populationData';

const AgeDistributionBar = ({ isFullPage = false }) => {
  const data = populationData.ageDistribution;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg ${isFullPage ? 'h-full' : ''}`}
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Distribution par Âge</h2>
      <ResponsiveContainer width="100%" height={isFullPage ? "90%" : 300}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="group" type="category" width={100} />
          <Tooltip />
          <Legend />
          <Bar dataKey="percentage" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AgeDistributionBar;