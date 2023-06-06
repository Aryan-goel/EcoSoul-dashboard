import React from 'react'
import { RiMenu2Line } from 'react-icons/ri'
import logo from '../assets/logo.png';


const Header = () => {
    return (
  <div className='header'>
                <RiMenu2Line size={43} color='white' />
            <img src={logo} alt="logo" className='' />
            <RiMenu2Line size={43} color='black' />

          
            </div>
        
    )
}

export default Header