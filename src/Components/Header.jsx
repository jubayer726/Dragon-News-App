import React from 'react';

import logo from '../assets/logo.png'
import { format } from 'date-fns';


const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 py-5'>
        <img className='w-[40 0px]' src={logo} alt="" />
        <p className='text-gray-400'>Journalism Without Fear or Favour</p>
        <p className='font-semibold text-accent'>{format(new Date(), "EEEE , MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;