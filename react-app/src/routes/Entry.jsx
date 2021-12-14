import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EntryFee from '../components/EntryFee';
import { BASE_URL } from '../globals';

export default function Entry() {
  const [allEntryFees, updateAllEntryFees] = useState([]);

  useEffect(() => {
    const getEntryFees = async () => {
      const response = await axios.get(`${BASE_URL}entryfee/`);
      updateAllEntryFees(response.data);
    };
    getEntryFees();
  }, []);
  
  return (
    <div>
      <div className='entryfee-container'>
        {allEntryFees.map((param, index) => (
          <EntryFee key={index} age={param.age} fee={param.fee}/>
        ))}
      </div>
    </div>
  )
}
