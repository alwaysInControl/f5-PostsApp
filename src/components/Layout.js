import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

const activeMenuClass = ({isActive}) => isActive ? 'active-menu' : ''

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to={'/'} className={activeMenuClass}>Home</NavLink></li>
                    <li><NavLink to={'/posts'} className={activeMenuClass}>Posts</NavLink></li>
                    <li><NavLink to={'/create-post'} className={activeMenuClass}>Create new post</NavLink></li>
                </ul>
            </nav>
            <div className='container'>
                <Outlet />
            </div>
            <footer>Geeks 2023</footer>
        </>
    );
};

export default Layout;