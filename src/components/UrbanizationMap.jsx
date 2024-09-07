import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const UrbanizationMap = ({ isFullPage = false }) => {
  const cities = [
    { name: 'Abidjan', population: 5616633, coordinates: [5.3600, -4.0083] },
    { name: 'Bouaké', population: 832371, coordinates: [7.6906, -5.0303] },
    { name: 'Korhogo', population: 440926, coordinates: [9.4578, -5.6297] },
    { name: 'Daloa', population: 421879, coordinates: [6.8898, -6.4504] },
    { name: 'San-Pédro', population: 390654, coordinates: [4.7485, -6.6363] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg ${isFullPage ? 'h-full' : ''}`}
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Carte d'Urbanisation</h2>
      <div className={`${isFullPage ? 'h-[calc(100%-3rem)]' : 'h-[300px] sm:h-[400px]'}`}>
        <MapContainer center={[7.54, -5.54]} zoom={6} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {cities.map((city) => (
            <Circle
              key={city.name}
              center={city.coordinates}
              radius={Math.sqrt(city.population) * 20}
              fillColor="#ff7800"
              color="#000"
              weight={1}
              opacity={0.8}
              fillOpacity={0.6}
            >
              <Tooltip>{`${city.name}: ${city.population.toLocaleString()}`}</Tooltip>
            </Circle>
          ))}
        </MapContainer>
      </div>
    </motion.div>
  );
};

export default UrbanizationMap;