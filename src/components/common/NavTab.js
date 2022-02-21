import React from "react";
import { NavLink } from 'react-router-dom';

const navLinkStyle = `
  hover:bg-gray-100 dark:hover:bg-gray-800
  px-4 py-2 
  rounded-xl
  whitespace-nowrap
  transition duration-300 ease-in-out
`

export default function NavTab({to, name}) {
  return (
    <NavLink to={to} end className={({ isActive }) => `${navLinkStyle} ${isActive && 'bg-gray-100 dark:bg-gray-800'}`}>
        {name}
    </NavLink>
  )
}