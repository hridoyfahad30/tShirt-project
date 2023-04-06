import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='mx-auto py-6 flex justify-around text-2xl text-white font-bold bg-slate-800'>
            <Link to='/'>Home</Link>
            <Link to='/review'>Order Review</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
        </nav>
    );
};

export default Header;