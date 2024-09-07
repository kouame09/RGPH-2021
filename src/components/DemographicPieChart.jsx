import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { populationData } from '../data/populationData';

const DemographicPieChart = ({ isFullPage = false }) => {
  const data = [
    { name: 'Hommes', value: populationData.genderDistribution.male },
    { name: 'Femmes', value: populationData.genderDistribution.female },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${isFullPage ? 'h-full' : ''}`}
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Répartition Démographique</h2>
      <ResponsiveContainer width="100%" height={isFullPage ? "90%" : 300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }} />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default DemographicPieChart;