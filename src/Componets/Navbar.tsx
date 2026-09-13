// import React from 'react';
import logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className='flex justify-between container mx-auto px-8 pt-3.5'>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className='flex gap-4 '>
                <li className='hover:text-[#DB2777]'>Home</li>
                <li className='hover:text-[#DB2777]'>Technologies</li>
                <li className='hover:text-[#DB2777]'>Projects</li>
                <li className='hover:text-[#DB2777]'>Home</li>
                <li className='hover:text-[#DB2777]'>Contact</li>
            </ul>
            <div>
                <button >Sign In</button>
                <button className='py-1.5 px-4 m-2 bg-[#DB2777] rounded-3xl'>Sign Up</button>

            </div>



        </nav>
    );
};

export default Navbar;