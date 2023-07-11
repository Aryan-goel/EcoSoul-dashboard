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
      <table style={{ border: '1px solid blue', width: '100%', height: '400px',padding:'1rem' }} >
          <thead style={{ color: 'white' }}>
              <tr style={{ border: '1px solid blue' }}>
                  <th style={{ color: 'white' }}>Report Name</th>
                  <th style={{ color: 'white' }}>Bucket Name</th>
                  <th style={{ color: 'white' }}>geography</th>
                  <th style={{ color: 'white' }}>Last Updated</th>
                  <th style={{ color: 'white' }}>Purpose</th>
                  <th style={{ color: 'white' }}>Service</th>
              </tr>
          </thead>
          <tbody style={{ border: '1px solid blue' }}>
              {entries.map((entry) => (
                  <tr style = {{ border: '1px solid blue' }} key={entry.id}>
                      <td style={{ color: 'white' }}>{entry.report_name}</td>
                      <td style={{ color: 'white' }}>{entry.bucketname}</td>
                      <td style={{ color: 'white' }}>{entry.geography}</td>
                      <td style={{ color: 'white' }}>{entry.last_updated}</td>
                      <td style={{ color: 'white' }}>{entry.purpose}</td>
                      <td style={{ color: 'white' }}>{entry.service}</td>
                  </tr>
              ))}
          </tbody>
      </table>

    //  
    //   <div>
    //       {entries.map(entry => (
    //           <div key={entry.id}>
    //               <h2 style={{ color: 'white' }}>Name: {entry.report_name}</h2>
    //               <p style={{color:'white'}}>Bucket Name: {entry.bucketname}</p>
    //               <p style={{ color: 'white' }}>Location: {entry.geography}</p>
    //               <p style={{ color: 'white' }}> Last Updated: {entry.last_updated}</p>
    //               <p style={{ color: 'white' }}>Purpose: {entry.purpose}</p>
    //               <p style={{ color: 'white' }}>Service: {entry.service}</p>
    //               {/* Render other fields as needed */}
    //           </div>
    //       ))}
    //   </div>
  )
}

export default OrderStatus