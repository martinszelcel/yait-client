import tw from 'tailwind-styled-components';

export default tw.button`
    ${({$color = 'blue'}) => `
        bg-${$color}-200 
        dark:bg-${$color}-600 
        hover:bg-${$color}-300 
        dark:hover:bg-${$color}-500 
    `}
    px-4 py-2 
    rounded-xl 
    transition duration-300 ease-in-out
`