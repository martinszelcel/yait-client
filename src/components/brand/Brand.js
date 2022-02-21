import React from 'react';
import BrandLetter from './BrandLetter';
import tw from 'tailwind-styled-components'

const BrandContainer = tw.div`
    ${({$isLarge}) => $isLarge ? 'w-20 h-20' : 'w-10 h-10'}
    grid grid-cols-2 grid-rows-2 gap-0.5
`

export default function Brand({isLarge}) {
    return (
        <BrandContainer $isLarge={isLarge}>
            <BrandLetter letter="Y" color="blue" isLarge={isLarge} />
            <BrandLetter letter="A" color="green" isLarge={isLarge} />
            <BrandLetter letter="I" color="yellow" isLarge={isLarge} />
            <BrandLetter letter="T" color="red" isLarge={isLarge} />
        </BrandContainer>
    );
}