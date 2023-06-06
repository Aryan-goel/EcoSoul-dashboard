import React from 'react'
import { RiShoppingCartFill } from 'react-icons/ri';
import { MdPassword } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
const Login = () => {

    function icon() {
        return <RiShoppingCartFill />
    }
    return (


        <div className='login'>
            <RiShoppingCartFill size={150} color='#FFA500' />
            <div className='input-wrapper'>
                <AiOutlineUser size={40} color='#FFA500' />
                <input placeholder='USERNAME' className='email-input' type="email" name="email" id="" />
            </div>
            <div className='input-wrapper'>
                <MdPassword size={40} color='#FFA500' />
                <input placeholder='PASSWORD' className='email-input' type="email" name="email" id="" />
            </div>
            <div className='forgot-password'>
                Forgot Password?
            </div>

            <button className='login-button'>
                LOGIN
            </button>
        </div>



    )
}

export default Login;