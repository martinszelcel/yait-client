import React from 'react';
import { Link } from 'react-router-dom';

export default class SquareItem extends React.Component {
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
        const { who, what, where, end, color } = this.props

        const fullText = who + what + where + end;

        return (
            <div className="mr-3 mb-3">
                <Link to="#">
                    <div className={`w-40 h-40 rounded-xl border border-gray-200 p-4 flex flex-col justify-between hover:bg-${color ? color : "blue"}-200 hover:shadow-lg hover:border-${color ? color : "blue"}-300 dark:border-gray-800 dark:hover:bg-${color ? color : "blue"}-600 dark:hover:border-${color ? color : "blue"}-500 transition duration-300 ease-in-out`} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                        <div className={`${fullText.length <= 47 ? "w-14 h-14 text-2xl" : "w-10 h-10"} rounded-full ${isHovered ? `bg-${color ? color : "blue"}-300 dark:bg-${color ? color : "blue"}-500` : `bg-${color ? color : "blue"}-200 dark:bg-${color ? color : "blue"}-600`} flex items-center justify-center font-bold mb-1 transition duration-300 ease-in-out`}>
                            {where ? where.charAt(0) : "?"}
                        </div>
                        <div className="whitespace-pre-wrap text-sm">
                            <span className="font-bold">{who} </span>
                            <span>{what} </span>
                            <span className="font-bold">{where} </span>
                            <span>{end}.</span>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}