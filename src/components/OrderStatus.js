import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import axios from 'axios';
import { useEffect, useState } from 'react';



const OrderStatus = () => {

    const [entries, setEntries] = useState([]);
    useEffect(() => {
        axios.get('/api/entries/')
            .then(response => {
                setEntries(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    console.log(entries);
  return (
    //  
      <div>
          {entries.map(entry => (
              <div key={entry.id}>
                  <h2 style={{ color: 'white' }}>Name: {entry.report_name}</h2>
                  <p style={{color:'white'}}>Bucket Name : {entry.bucketname}</p>
                  <p style={{ color: 'white' }}>Location: {entry.geography}</p>
                  <p style={{ color: 'white' }}> Last Updated: {entry.last_updated}</p>
                  <p style={{ color: 'white' }}>Purpose: {entry.purpose}</p>
                  <p style={{ color: 'white' }}>Service: {entry.service}</p>
                  {/* Render other fields as needed */}
              </div>
          ))}
      </div>
  )
}

export default OrderStatus