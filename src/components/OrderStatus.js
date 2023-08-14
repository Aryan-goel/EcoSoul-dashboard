import React from 'react'
import Header from './Header';
import axios from 'axios';
import { useEffect, useState } from 'react';


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
            },
            {
                bucketname: "document",
                purpose: "inventory",
                geography: "Singapore",
                service: "amazon",
                report_name: "removal_orders",
                last_updated: "Never"
            }, {
                bucketname: "document",
                purpose: "inventory",
                geography: "Singapore",
                service: "amazon",
                report_name: "removal_orders",
                last_updated: "Never"
            },
            {
                bucketname: "document",
                purpose: "inventory",
                geography: "Singapore",
                service: "amazon",
                report_name: "removal_orders",
                last_updated: "Never"
            },
            {
                bucketname: "document",
                purpose: "inventory",
                geography: "Singapore",
                service: "amazon",
                report_name: "removal_orders",
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
    const itemsPerPage = 5;
    const [entries, setEntries] = useState(...entry);
    console.log('a',...entry);
    console.log(entry);
    const [sortConfig, setSortConfig] = useState(/* { key: null, direction: null } */ null);
    const [isPaginate, setIsPaginate] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = entry.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentData = isPaginate ? entry.slice(indexOfFirstItem, indexOfLastItem) : entries;

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setIsPaginate(true)
    };
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }

        setSortConfig({ key, direction });
        const sortedData = [...entries].sort((a, b) => {

            if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
            return 0;
        });
        setEntries(sortedData);
        setCurrentPage(1); // Reset to the first page after sorting

    };



    useEffect(() => {
        axios.get('/api/entries/')
            .then(response => {
                setEntries(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

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
                        {entries.slice(indexOfFirstItem, indexOfLastItem).map((entry) => (
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
                <div>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>

            </div>
        </>

    )
}

export default OrderStatus