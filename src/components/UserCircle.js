import React from 'react';

export default function UserCircle({firstName, lastName, isHovered, className, color="blue"}) {
    return (
        <div className={`
            w-10 h-10 
            bg-${color}-${isHovered ? "300" : "200"} dark:bg-${color}-${isHovered ? "500" : "600"} 
            hover:bg-${color}-300 dark:hover:bg-${color}-500 
            rounded-full 
            flex items-center justify-center 
            font-bold 
            transition duration-300 ease-in-out 
            ${className}
        `}>
            {firstName ? firstName.charAt(0) : ""}
            {lastName ? lastName.charAt(0) : ""}
        </div>
    )
}