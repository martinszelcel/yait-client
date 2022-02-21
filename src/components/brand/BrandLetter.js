import React from 'react';
import tw from 'tailwind-styled-components'

const LetterContainer = tw.div`
    ${({$color}) => `
        bg-${$color}-200 dark:bg-${$color}-500
        hover:bg-${$color}-300 dark:hover:bg-${$color}-400
    `}
    ${({$isLarge}) => $isLarge ? 'rounded-xl text-2xl' : 'rounded-md text-xs'}
    font-bold
    flex justify-center items-center 
    transition duration-300 ease-in-out
`

export default function BrandLetter({ letter, color, isLarge }) {
    return (
        <LetterContainer $color={color} $isLarge={isLarge}>
            {letter}
        </LetterContainer>
    )
}