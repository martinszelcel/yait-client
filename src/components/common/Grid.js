import tw from "tailwind-styled-components";

export default tw.div`
    flex flex-col gap-3
    lg:grid 
    ${({cols = 5, rows = 5}) => `lg:grid-cols-${cols} lg:grid-rows-${rows}`}
`