import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { populationData } from '../data/populationData';

const UrbanizationChart = ({ isFullPage = false }) => {
  const data = [
    { name: 'Urbain', value: populationData.urbanization.urban },
    { name: 'Rural', value: populationData.urbanization.rural }
  ];
  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white p-6 rounded-xl shadow-lg ${isFullPage ? 'h-full' : ''}`}
    >
      <h2 className="text-2xl font-semibold mb-4">Taux d'urbanisation</h2>
      <ResponsiveContainer width="100%" height={isFullPage ? "90%" : 300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default UrbanizationChart;