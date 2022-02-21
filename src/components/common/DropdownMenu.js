import React from 'react';
import tw from 'tailwind-styled-components';

const DropdownButton = tw.button`
    ${({$active}) => $active && 'bg-gray-100 dark:bg-gray-800'}
    flex items-center 
    rounded-xl 
    transition duration-300 ease-in-out 
    relative 
`

const DropdownContainer = tw.div`
    bg-white dark:bg-gray-900
    border border-gray-100 dark:border-gray-800
    absolute top-12 right-0 
    p-2 
    rounded-xl 
    shadow-xl 
    z-10 
    min-w-full
    flex flex-col gap-3 
    transition duration-300 ease-in-out animate-show 
`

export default class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);

        this.button = React.createRef();
        this.state = {
            isHovered: false,
            isOpened: false,
        }
    }

    componentDidMount = () => {
        window.addEventListener("click", this.onClick);
    }

    componentWillUnmount = () => {
        window.removeEventListener("click", this.onClick);
    }

    onClick = (e) => {
        if (this.button.current && this.button.current.contains(e.target)) {
            this.setState({
                isOpened: !this.state.isOpened
            });
        } else {
            this.setState({
                isOpened: false,
                isHovered: false
            });
        }
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

    render() {
        const { isHovered, isOpened } = this.state;
        const { button, menuItems, className, dropdownClassName } = this.props;

        return (
            <DropdownButton $active={isHovered || isOpened} ref={this.button} className={className} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>

                {button(this.state)}

                {isOpened && (
                    <DropdownContainer className={dropdownClassName}>
                        {menuItems.map((menuItem, index) => 
                            <React.Fragment key={index}>
                                {menuItem}
                            </React.Fragment>
                        )}
                    </DropdownContainer>
                )}
                
            </DropdownButton>
        );
    }
}