import React from 'react';
import logo from '../../Assets/Image/logo.png'
import { NavLink } from "react-router-dom";
import './navbar.css'


const Navbar = () => {
    return (
        <nav>
            <div className='logo-container' >
                <img src={logo} alt='' />
            </div>
            <div className='link-container' >
                <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to='/' > Home </NavLink>

                <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to='/video'> Video </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to='/login' > Login </NavLink>



            </div>
        </nav>
    );
};

export default Navbar;