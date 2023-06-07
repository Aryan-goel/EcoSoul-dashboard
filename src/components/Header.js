import React, { useState } from 'react'
import { RiMenu2Line } from 'react-icons/ri'
import logo from '../assets/logo.png';
import Sidebar from './Sidebar';


const Header = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    const toggleSideBar =()=>{
        showSideBar===true ? setShowSideBar(false) : setShowSideBar(true);
    }
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" className='' />
            </div>
            <div className="sidebar-icon">

                <RiMenu2Line size={43} color={showSideBar===true ? 'black': 'white'} onClick={toggleSideBar} className='close-sidebar' />
            {
                 showSideBar ? <Sidebar/> :null
           }
            </div>
        </div>

    )
}

export default Header