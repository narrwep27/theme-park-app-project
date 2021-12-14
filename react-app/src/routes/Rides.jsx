import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ride from '../components/Ride';

export default function Rides(props) {
  const [rides, setRides] = useState([]);
  
  useEffect(() => {
    const getRides = async () => {
      let rides = await axios.get('http://localhost:3001/ride');
      setRides(rides.data);
    };
    getRides();
  }, []);
  
  return (
    <div className="ride-container">
      <Header />
      {rides.map((ride, index) => (
        <Ride 
        key={index}
        name={ride.name}
        thrillLevel={ride.thrillLevel}
        minimumHeight={ride.minimumHeight}
        description={ride.description}
        imageUrl={ride.imageUrl}
        />
      ))}
      <Footer />
    </div>
  );
};
