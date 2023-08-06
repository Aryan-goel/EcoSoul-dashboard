import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { Card } from '@mui/material';




const OrderStatus = () => {



    const entry =
        [
            {
                bucketname: "documents",
                purpose: "inventory",
                geography: "USA",
                service: "amazon",
                report_name: "aging",
                last_updated: "Never"
            },
            {
                bucketname: "document",
                purpose: "inventory",
                geography: "India",
                service: "amazon",
                report_name: "fbm_inventory",
                last_updated: "Never"
            },
            {
                bucketname: "document",
                purpose: "inventory",
                geography: "Africa",
                service: "amazon",
                report_name: "ledger",
                last_updated: "c"
            },
            {
                bucketname: "document",
                purpose: "inventory",
                geography: "London",
                service: "amazon",
                report_name: "manage_fba",
                last_updated: "Never"
            },
            {
                bucketname: "document",
                purpose: "inventory",
                geography: "Singapore",
                service: "amazon",
                report_name: "removal_orders",
                last_updated: "Never"
            }
        ]
    const [entries, setEntries] = useState(entry);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const requestSort = (key) => {
        // console.log(key,key);
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }

        const sortedData = [...entries].sort((a, b) => {
            // console.log(a[key]<b[key]);
            // console.log(a[key],b[key]);
            if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
            return 0;
        });
        // console.log(sortedData,'sortedData');
        setEntries(sortedData);
        setSortConfig({ key, direction });
    };



    // useEffect(() => {
    //     axios.get('/api/entries/')
    //         .then(response => {
    //             setEntries(response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);

    // console.log(entry[0].bucketname ==='documents'? true:false ,"heluu");
    return (
        <>
            <Header />
            <button className='sort-button'>sort</button>
            <button className='sort-button'>filter</button>
            <div style={{ padding: '2rem' }} ></div>
            <div className='shadow'>
            <table style={{ width: '100%', height: '400px', background: '#FFA500' }}>
                <thead>
                        <tr>
                            <th onClick={() => requestSort('report_name')}>Report Name</th>
                            <th onClick={() => requestSort('geography')}>Geography</th>
                            <th onClick={() => requestSort('last_updated')}>Last Updated</th>
                            <th onClick={() => requestSort('bucketname')}>Bucket Name</th>
                            <th onClick={() => requestSort('purpose')}>Purpose</th>
                            <th onClick={() => requestSort('service')}>Service</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry) => (
                            <tr key={entry.report_name}>
                                <td>{entry.report_name}</td>
                                <td>{entry.geography}</td>
                                <td>{entry.last_updated}</td>
                                <td>{entry.bucketname}</td>
                                <td>{entry.purpose}</td>
                                <td>{entry.service}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
            </div>



            {/* <div className='shadow'>
            <TableContainer  component={Card} sx={{
                background: '#FFA500', margin: 'auto',
            }}>
                <Table hoverRow sx={{  }} aria-label="simple table">
                    <TableHead >
                        <TableRow hover>
                              
                                <TableCell onClick={requestSort('')} align="left" style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'montserrat' }}>Report Name</TableCell>
                                <TableCell onClick={requestSort('geography')} align="left" style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'montserrat' }}>Geography</TableCell>
                                <TableCell align="left" style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'montserrat' }}>Last Updated</TableCell>
                                <TableCell align="left" style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'montserrat' }}>Bucket Name</TableCell>
                                <TableCell align="left" style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'montserrat' }}>Purpose</TableCell>
                                <TableCell align="left" style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'montserrat' }}>Service</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry) => (
                            <TableRow
                                key={entry.report_name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            > */}
            {/* <TableCell component="th" scope="row">
                                    {entry.report_name}
                                </TableCell> */}
            {/* <TableCell align="left">{entry.geography}</TableCell>
                                    <TableCell align="left">{entry.last_updated}</TableCell>
                                    <TableCell align="left">{entry.bucketname}</TableCell>
                                    <TableCell align="left">{entry.purpose}</TableCell>
                                    <TableCell align="left">{entry.service}</TableCell> */}
            {/* </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
            {/* </div> */}
        </>

    )
}

export default OrderStatus