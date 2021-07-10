import React from 'react';

const FormField = ({id, name, type, onChange, value}) => {
    return (
        <div className="flex flex-col items-start flex-grow">
            <label htmlFor={id} className="mb-1">{name}</label>
            {type === "textarea" ? (
                <textarea
                    id={id} 
                    name={id} 
                    onChange={onChange} 
                    className="text-md text-gray-800 border rounded-lg w-full px-4 py-2"
                >
                    {value}
                </textarea>
            ) : (
                <input 
                id={id} 
                name={id} 
                type={type || "text"} 
                onChange={onChange} 
                value={value} 
                className="text-md text-gray-800 border rounded-lg w-full px-4 py-2" />
            )}
        </div>
    );
}

export default FormField