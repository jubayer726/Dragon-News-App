import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className='bg-base-200 min-h-screen py-5'>
            <header className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-10/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Auth;