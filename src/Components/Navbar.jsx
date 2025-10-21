import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userLogo from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = use(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then(() => {
        alert("Signout Successfully");
      })
      .catch((error) => {
        console.log(error.massege);
      });
    }
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center p-5'>
            <div className=''>{user && user.email}</div>
            <div className='flex gap-4 text-base-300 font-semibold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <img className='w-12 rounded-full' src={`${user? user.photoURL : userLogo}`} alt="" />
                {
                    user? <button onClick={handleSignOut} className='btn btn-primary px-8 py-4'>LogOut</button>: <Link to='/auth/login' className='btn btn-primary px-8 py-4'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;