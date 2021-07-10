import React from 'react';

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} type="button" className="bg-blue-500 text-white rounded-lg px-4 py-2">
            {children}
        </button>
    )
}

export default Button;