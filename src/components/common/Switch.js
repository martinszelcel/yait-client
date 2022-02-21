import React, { Fragment } from 'react';
import tw from 'tailwind-styled-components'

const SwitchContainer = tw.div`
    bg-gray-100 dark:bg-gray-800 
    inline-flex 
    rounded-full
`

const Label = tw.label`
    ${({ $active }) => $active && "bg-gray-200 dark:bg-gray-700"}
    px-4 py-2
    rounded-full
    cursor-pointer 
    transition-colors duration-300 ease-in-out
`

export default function Switch({currentState, onChange, states, name}) {
    return (
        <SwitchContainer onChange={onChange}>
            {
                states.map((stateItem, index) => (
                    <Fragment key={index}>
                        <input 
                            type="radio" 
                            name={name} 
                            id={name + stateItem} 
                            value={stateItem.toLowerCase()} 
                            className="hidden" 
                        />
                        <Label 
                            htmlFor={name + stateItem} 
                            $active={currentState.toLowerCase() == stateItem.toLowerCase()}
                        >
                            {stateItem}
                        </Label> 
                    </Fragment>       
                ))
            }
        </SwitchContainer>
    )
}