import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Circle, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { populationData } from '../data/populationData';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

const UrbanizationMap = ({ isFullPage = false }) => {
  const cities = populationData.majorCities;
  const [isFullscreen, setIsFullscreen] = useState(false);
  const mapRef = useRef(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      mapRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg ${isFullPage ? 'h-full' : 'w-full'}`}
      ref={mapRef}
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Carte d'Urbanisation</h2>
      <div className={`relative ${isFullPage ? 'h-[calc(100%-3rem)]' : 'h-[300px] sm:h-[400px]'}`}>
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
        <button 
          onClick={toggleFullscreen}
          className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md z-[1000] hover:bg-gray-100 transition-colors"
        >
          {isFullscreen ? <MdFullscreenExit size={24} /> : <MdFullscreen size={24} />}
        </button>
      </div>
    </motion.div>
  );
};

export default UrbanizationMap;