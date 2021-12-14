import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EntryFee from '../components/EntryFee';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Entry() {
  const [allEntryFees, updateAllEntryFees] = useState([]);

  useEffect(() => {
    const getEntryFees = async () => {
      const response = await axios.get('http://localhost:3001/entryfee/');
      updateAllEntryFees(response.data);
    };
    getEntryFees();
  }, []);
  
  return (
    <div>
      <Header />
      <div className='entryfee-container'>
        {allEntryFees.map((param, index) => (
          <EntryFee key={index} age={param.age} fee={param.fee}/>
        ))}
      </div>
      <Footer />
    </div>
  )
}
