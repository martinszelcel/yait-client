import React from "react";
import { NavLink } from "react-router-dom";
import UserCircle from "../UserCircle";

export default class Team extends React.Component {
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

    render() {
        const { isHovered } = this.state;
        const { name, color = "blue", members = [] } = this.props;

        return (
            <NavLink 
                to={name}
                className={({ isActive }) => `
                    flex flex-shrink-0 gap-3 flex-col items-left lg:flex-row lg:items-center 
                    w-32 h-32 lg:w-auto lg:h-auto p-4
                    ${isActive ? `bg-${color}-200 dark:bg-${color}-600` : null} hover:bg-${color}-200 dark:hover:bg-${color}-600
                    border rounded-xl ${isActive ? `border-${color}-300 dark:border-${color}-500` : `border-gray-100 dark:border-gray-800`} hover:border-${color}-300 dark:hover:border-${color}-500
                    ${isActive ? `shadow-lg` : null} hover:shadow-lg 
                    transition-all duration-300 ease-in-out`
                } 
                onMouseEnter={this.onMouseEnter} 
                onMouseLeave={this.onMouseLeave}
            >
                <div className="flex">
                {members.slice(0,3).map((member, index) => (
                    <UserCircle firstName={member.firstName} lastName={member.lastName} color={member.color} className={`-ml-8 first:ml-0 z-${3 - index}0`} />
                ))}
                </div>
                
                <h3 className="font-bold">{name}</h3>
            </NavLink>
        );
    }
}