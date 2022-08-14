import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import css from '../SharedLayout/SharedLayout.module.css';


const SharedLayout = () => {
    return (
        <>
            <nav className={css.mainNav}>
                <NavLink to='/' className={css.mainNav__link}>Home</NavLink>
                <NavLink to='/movies' className={css.mainNav__link}>Movies</NavLink>      
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
                
        </>  
    )
}

export default SharedLayout;