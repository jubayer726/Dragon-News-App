import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center p-5'>
            <div className=''></div>
            <div className='flex gap-4 text-base-300 font-semibold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-8 py-4'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;