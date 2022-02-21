import React from "react";
import { Link } from "react-router-dom";
import tw from 'tailwind-styled-components';

const Container = tw.div`
  ${({$color = 'gray'}) => `hover:bg-${$color}-100 dark:hover:bg-${$color}-600`}
  ${({ $size = '32'}) => `w-${$size} h-${$size}`}
  p-4 
  rounded-xl 
  border border-gray-100 dark:border-gray-800 
  ${({$color = 'gray'}) => `hover:border-${$color}-200 dark:hover:border-${$color}-500`}
  hover:shadow-lg 
  transition duration-300 ease-in-out
  flex flex-col justify-center items-center gap-3
`

const TextContainer = tw.div`
  text-xs font-bold 
  whitespace-nowrap
`

const CircleIconContainer = tw.div`
  ${({ $size = '16'}) => `w-${$size} h-${$size}`}
  ${({$color = "gray", $isHovered}) => `
    bg-${$color}-${$isHovered ? '300' : '200'} dark:bg-${$color}-${$isHovered ? '500' : '600'}
    hover:bg-${$color}-300 dark:hover:bg-${$color}-500 
  `}
  rounded-full 
  flex items-center justify-center 
  text-xl font-bold 
  transition duration-300 ease-in-out 
`

export default class SquareButton extends React.Component {
  state = {
    isHovered: false
  }

  onMouseEnter = () => {
    this.setState({
        isHovered: true
    });
  }

  onMouseLeave = () => {
    this.setState({
        isHovered: false
    })
  }

  render () {
    const { isHovered } = this.state;
    const { color, icon, text, isLink, to, onClick, size, circleSize } = this.props;

    const content = (
      <Container $color={color} $size={size} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <CircleIconContainer $size={circleSize} $color={color} $isHovered={isHovered}>
          {icon}
        </CircleIconContainer>
        <TextContainer>
          {text}
        </TextContainer>
      </Container>
    )

    return isLink ? (
      <Link to={to}>
        {content}
      </Link>
    ) : (
      <button type="button" onClick={onClick}>
        {content}
      </button>
    )
  }
}