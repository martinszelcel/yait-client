import React from 'react';
import { Link } from 'react-router-dom';
import NavbarAccount from './NavbarAccount';
import NavbarItemList from './NavbarItemList';
import Panel from '../common/Panel';
import Brand from '../brand/Brand';
import tw from 'tailwind-styled-components';

const NavbarPanel = tw(Panel)`
    flex justify-between items-center
`

export default function Navbar() {
    const firstName = "Martin";
    const lastName = "Szelcel";

    const navbarItems = [
        {
            path: '/',
            color: 'blue',
            text: "Home"
        },
        {
            path: '/board',
            color: 'purple',
            text: "Task Board"
        },
        {
            path: '/teams',
            color: 'green',
            text: "Teams"
        },
        {
            path: '/projects',
            color: 'yellow',
            text: "Projects"
        },
    ]

    return (
        <nav>
            <NavbarPanel>
                <Link to="/">
                    <Brand />
                </Link>
                <NavbarItemList items={navbarItems} />
                <NavbarAccount firstName={firstName} lastName={lastName} />
            </NavbarPanel>
        </nav>    
    );
}
