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
                report_name: "fbm inventory",
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
                report_name: "manage fba",
                last_updated: "Never"
            },
            {
                bucketname: "document",
                purpose: "inventory",
                geography: "Singapore",
                service: "amazon",
                report_name: "removal orders",
                last_updated: "Never"
            },
            {
                bucketname: "document",
                purpose: "inventory",
                geography: "Singapore",
                service: "amazon",
                report_name: "transfer order",
                last_updated: "Never"
            }, {
                bucketname: "document",
                purpose: "inventory",
                geography: "Singapore",
                service: "amazon",
                report_name: "purchasing orders",
                last_updated: "Never"
            },
            {
                bucketname: "document",
                purpose: "inventory",
                geography: "Singapore",
                service: "amazon",
                report_name: "receving orders",
                last_updated: "Never"
            },
            {
                bucketname: "document",
                purpose: "inventory",
                geography: "Singapore",
                service: "amazon",
                report_name: "bulk orders",
                last_updated: "Never"
            },
            {
                bucketname: "document",
                purpose: "inventory",
                geography: "Singapore",
                service: "amazon",
                report_name: "inventory orders",
                last_updated: "Never"
            }
        ]
    const [entries, setEntries] = useState(entry);
    const itemsPerPage = 5; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        setCurrentPage(1); // Reset to the first page when searching
    };

    useEffect(() => {
        // axios.get('/api/entries/')
        //     .then(response => {
        //         setEntries(response.data);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
        const filteredEntries = entry.filter(entry => {
            const searchTerms = searchQuery.toLowerCase().split(' ');
            return searchTerms.every(term =>
                entry.report_name.toLowerCase().includes(term) ||
                entry.geography.toLowerCase().includes(term) ||
                entry.last_updated.toLowerCase().includes(term) ||
                entry.bucketname.toLowerCase().includes(term) ||
                entry.purpose.toLowerCase().includes(term) ||
                entry.service.toLowerCase().includes(term)
            );
        });
        // setEntries(entry)
        setEntries(filteredEntries);

    }, [searchQuery]);

    const totalItems = entries.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = entries.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) {
            return; // Don't change the page if out of bounds
        }

        setCurrentPage(page);
    };

    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
   
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
   

    return (
        <>
            <Header />
            {/* <div className="search-bar"> */}
                <input
                className='search-bar'
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            {/* </div> */}
            <div style={{ padding: '2rem' }} ></div>
            <div className='shadow'>
                <table style={{ width: '100%', height: '400px', background: '#FFA500', paddingTop: '1rem', paddingBottom: '1rem' }}>
                
                    <thead>
                        <tr className='table-headers'>
                            <th onClick={() => requestSort('report_name')}>Report Name</th>
                            <th onClick={() => requestSort('geography')}>Geography</th>
                            <th onClick={() => requestSort('last_updated')}>Last Updated</th>
                            <th onClick={() => requestSort('bucketname')}>Bucket Name</th>
                            <th onClick={() => requestSort('purpose')}>Purpose</th>
                            <th onClick={() => requestSort('service')}>Service</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentData.map((entry) => (
                            <tr className='table-entry' key={entry.report_name}>
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
            <div className='paginate-div'>
                <button className='button-paginate' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <button className='button-paginate' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </>

    )
}

export default OrderStatus