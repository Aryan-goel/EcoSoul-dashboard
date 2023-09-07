import React from 'react';
import axios from 'axios';

const Logout = () => {
    const handleLogout = () => {
        axios.post('/api/logout/')  // Replace with the actual URL of your Django logout API
            .then(response => {
                console.log(response.data.message);
                // You can perform any client-side logout logic here if needed
                // For example, clear user data from the state or local storage
            })
            .catch(error => {
                console.error('Logout failed', error);
            });
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
