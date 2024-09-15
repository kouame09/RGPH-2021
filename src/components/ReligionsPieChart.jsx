import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { populationData } from '../data/populationData';

const ReligionsPieChart = ({ isFullPage = false }) => {
  const data = populationData.religions;
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="12px"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-xl shadow-lg ${isFullPage ? 'h-full' : ''} w-full p-4`}
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Répartition des religions</h2>
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <div className="w-full sm:w-3/4 h-72 sm:h-96"> {/* Augmenté la largeur et la hauteur pour les grands écrans */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius="90%" // Légèrement agrandi
                innerRadius="30%" // Ajout d'un rayon intérieur pour créer un effet donut
                fill="#8884d8"
                dataKey="percentage"
                label={renderCustomizedLabel}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => `${(value * 100).toFixed(1)}%`}
                contentStyle={{ fontSize: '12px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full sm:w-1/4 mt-4 sm:mt-0 sm:pl-4"> {/* Réduit la largeur de la légende */}
          <ul className="list-none p-0">
            {data.map((entry, index) => (
              <li key={`legend-${index}`} className="flex items-center mb-2">
                <span 
                  className="w-4 h-4 mr-2 flex-shrink-0" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm">{`${entry.name} (${(entry.percentage * 100).toFixed(1)}%)`}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ReligionsPieChart;