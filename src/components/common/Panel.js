import React from "react";
import tw from 'tailwind-styled-components';

const PanelContainer = tw.div`
    bg-white dark:bg-gray-900
    p-4
    rounded-xl
    shadow-md
    transition-all duration-300 ease-in-out
    relative
`

const Title = tw.h1`
    text-xl text-center
    mb-3
`

export default function Panel({className, children, title }) {
    return (
        <PanelContainer className={className}>
            {title && (<Title>{title}</Title>)}
            {children}
        </PanelContainer>
    )
}