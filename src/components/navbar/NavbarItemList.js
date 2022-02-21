import React from "react";
import NavbarItem from "./NavbarItem";
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

export default function NavbarItemList({ items }) {
    const navbarItems = items.map((item, index) => (
        <NavbarItem to={item.path} color={item.color} key={index}>{item.text}</NavbarItem>
    ));

    return (
        <div className="w-full mx-4 flex justify-center">
            <button className="md:hidden w-full py-2 flex justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition duration-300 ease-in-out">
                <Icon path={mdiChevronDown} size={1.5} />
            </button>
            <ul className="hidden md:flex">
                {navbarItems}
            </ul>
        </div>
    )
}