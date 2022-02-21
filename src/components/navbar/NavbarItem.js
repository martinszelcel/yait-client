import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavbarItem({to, color = "blue", children}) {
    return (
        <li>
            <NavLink to={to} className={({ isActive }) => `
                ${isActive ? `bg-${color}-200 dark:bg-${color}-600` : ""}
                hover:bg-${color}-${isActive ? "300" : "200"} dark:hover:bg-${color}-${isActive ? "500" : "600"}
                px-4 py-3 mx-4
                rounded-xl
                transition duration-300 ease-in-out
            `}>
                {children}
            </NavLink>
        </li>
    );
}