import React from 'react';

const FormField = ({ id, name, type, onChange, value, placeholder, options }) => {
    return (
        <div className="flex flex-col items-start gap-2">
            {name ? <label htmlFor={id}>{name}:</label> : null}

            {/* TEXTAREA */}
            {type === "textarea" && (
                <textarea
                    id={id} 
                    name={id} 
                    onChange={onChange} 
                    className="text-md text-gray-900 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700 border rounded-xl w-full px-4 py-2 resize-none"
                    value={value}
                    placeholder={placeholder}
                >
                </textarea>
            )}

            {/* SELECT */}
            {type === "select" && (
                <>
                    <select 
                        id={id} 
                        name={id} 
                        onChange={onChange} 
                        value={value}
                        placeholder={placeholder}
                        className="text-md text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg w-full px-4 py-2"
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

                </>
            )}
            
            {/* OTHER */}
            {type !== "textarea" && type != "select" && (
                <input 
                id={id} 
                name={id} 
                type={type || "text"} 
                onChange={onChange} 
                value={value} 
                placeholder={placeholder}
                className="text-md text-gray-900 dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700 border rounded-lg w-full px-4 py-2" />
            )}

        </div>
    );
}

export default FormField