import React, { useState } from 'react'
import { RiShoppingCartFill } from 'react-icons/ri';
import { MdPassword } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import axios from 'axios';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login/', { username, password });
            console.log(response.data.message); // Display response from the server
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>

       
          <div className='login'>
         
            <RiShoppingCartFill size={150} color='#FFA500' />
            <div className='input-wrapper'>
                <AiOutlineUser size={40} color='#FFA500' />
                <input
                    placeholder='USERNAME'
                    className='email-input' 
                    type="" 
                    name="email"
                    id=""
                    onChange={(e)=>setUsername(e.target.value)}
                    
                    />
            </div>
            <div className='input-wrapper'>
                <MdPassword size={40} color='#FFA500' />
                <input 
                placeholder='PASSWORD'
                 className='email-input' 
                 type="password" 
                 name="email"
                 id=""
                 onChange={(e) => setPassword(e.target.value)}
 />
            </div>
            <button className='login-button'>
                LOGIN
            </button>
        </div>
        </form>



    )
}

export default Login;