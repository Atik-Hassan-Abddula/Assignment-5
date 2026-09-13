import React from 'react';
import logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className='flex justify-between container mx-auto px-8 pt-3.5 sticky top-0'>
            <div className='p-2' >
                <img src={logo} alt="" />
            </div>
            <ul className='flex gap-4 items-center   '>
                <li className='hover:text-[#DB2777] cursor-pointer '>Home</li>
                <li className='hover:text-[#DB2777] cursor-pointer'>Technologies</li>
                <li className='hover:text-[#DB2777] cursor-pointer'>Projects</li>
                <li className='hover:text-[#DB2777] cursor-pointer'>Home</li>
                <li className='hover:text-[#DB2777] cursor-pointer'>Contact</li>
            </ul>
            <div className='items-center'>
                <button className='cursor-pointer' >Sign In</button>
                <button className='py-1.5 px-4 m-2 bg-[#DB2777] rounded-3xl cursor-pointer'>Sign Up</button>

            </div>



        </nav>
    );
};

export default Navbar;