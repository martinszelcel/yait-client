import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../common/DropdownMenu';
import DropdownMenuItem from '../common/DropdownMenuItem';
import Separator from '../common/Separator';
import UserCircle from '../UserCircle';

export default function NavbarAccount({ firstName, lastName }) {
    return (
        <DropdownMenu 
            className="rounded-full"
            button={({isHovered, isOpened}) =>
                <>
                    <div className="pl-4 pr-2">{firstName}</div>
                    <UserCircle firstName={firstName} lastName={lastName} isHovered={isHovered || isOpened} />    
                </>
            }
            menuItems={[
                <Link to="/settings">
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                </Link>,
                <Link to="/account">
                    <DropdownMenuItem>Account</DropdownMenuItem>
                </Link>,
                <Separator />,
                <DropdownMenuItem className="hover:bg-red-100 dark:hover:bg-red-600">
                    Logout
                </DropdownMenuItem>
            ]}
        />
    );
}