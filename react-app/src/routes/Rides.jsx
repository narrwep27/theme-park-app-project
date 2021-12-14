import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Ride from '../components/Ride';
import { BASE_URL } from '../globals';

export default function Rides(props) {
  const [rides, setRides] = useState([]);
  
  useEffect(() => {
    const getRides = async () => {
      let rides = await axios.get(`${BASE_URL}ride`);
      setRides(rides.data);
    };
    getRides();
  }, []);
  
  return (
    <div className="ride-container">
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
    </div>
  );
};
