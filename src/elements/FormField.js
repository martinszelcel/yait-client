import React from 'react';

const FormField = ({id, name, type, onChange, value, options}) => {
    console.log(options);

    return (
        <div className="flex flex-col items-start flex-grow">
            <label htmlFor={id} className="mb-1">{name}</label>

            {/* TEXTAREA */}
            {type === "textarea" ? (
                <textarea
                    id={id} 
                    name={id} 
                    onChange={onChange} 
                    className="text-md text-gray-800 border rounded-lg w-full px-4 py-2"
                    value={value}
                >
                </textarea>
            ) : null}

            {/* SELECT */}
            {type === "select" ? (
                <select 
                    id={id} 
                    name={id} 
                    onChange={onChange} 
                    value={value}
                    className="text-md text-gray-800 bg-white border rounded-lg w-full px-4 py-2"
                >
                    {options ? options.map(option => {
                        return typeof(option) === 'string' ? (
                                <option key={option}>{option}</option>
                            ) : (
                                <option id={option.id} key={option.id}>{option.name}</option>
                            )
                        }                   
                    ) : null}
                </select>
            ) : null}
            
            {/* OTHER */}
            {type !== "textarea" && type != "select" ? (
                <input 
                id={id} 
                name={id} 
                type={type || "text"} 
                onChange={onChange} 
                value={value} 
                className="text-md text-gray-800 border rounded-lg w-full px-4 py-2" />
            ) : null}

        </div>
    );
}

export default FormField