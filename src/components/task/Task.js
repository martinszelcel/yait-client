import React from 'react';
import { Link } from 'react-router-dom';
import UserCircle from '../UserCircle'
import Icon from '@mdi/react';
import { mdiDrag } from '@mdi/js';
import { Draggable } from 'react-beautiful-dnd';

export default class Task extends React.Component {
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
        const { draggable = false, showStatus = false, showAssigned = false, className, index } = this.props;
        const { id, title, projectName, status, color, isDone, assignedUser } = this.props.task;

        const taskElement = (draggableProps, dragHandleProps, innerRef) => (
            <Link to={`/task/${title}`}>
                <div {...draggableProps} {...dragHandleProps} ref={innerRef} className={`border rounded-xl border-gray-200 p-4 relative hover:bg-${color ? color : "blue"}-200 ${isDone ? "opacity-40" : ""} hover:shadow-lg hover:border-${color ? color : "blue"}-300 dark:border-gray-800 dark:hover:bg-${color ? color : "blue"}-600 dark:hover:border-${color ? color : "blue"}-500 bg-white dark:bg-gray-900 mb-3 transition-colors duration-300 ease-in-out ${className}`} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    <h3 className="font-bold">{title}</h3>
                    <span>{projectName}</span>

                    <div className="absolute right-3 top-3 flex items-center gap-1">
                        {showAssigned ? (
                                <div className={`
                                    w-6 h-6 
                                    bg-blue-200 dark:bg-blue-600 
                                    hover:bg-blue-300 dark:hover:bg-blue-500 
                                    rounded-full 
                                    flex items-center justify-center 
                                    font-bold text-2xs
                                    transition duration-300 ease-in-out 
                                `} title={`${assignedUser.firstName} ${assignedUser.lastName}`}>
                                    {assignedUser.firstName ? assignedUser.firstName.charAt(0) : ""}
                                    {assignedUser.lastName ? assignedUser.lastName.charAt(0) : ""}
                                </div>
                        ) : null}
                        {showStatus ?  (
                            <div className={`px-2 py-1 rounded-xl ${isHovered ? `bg-${color ? color : "blue"}-300 dark:bg-${color ? color : "blue"}-500` : `bg-${color ? color : "blue"}-200 dark:bg-${color ? color : "blue"}-600`} text-xs transition duration-300 ease-in-out`}>
                                {status}
                            </div>
                        ) : null}
                        {draggable ? <Icon path={mdiDrag} size={1} /> : null}
                    </div>
                </div>
            </Link>
        );

        return draggable ? (
            <Draggable draggableId={id.toString()} index={index} isDragDisabled={!draggable}>
                {({ draggableProps, dragHandleProps, innerRef}) => (
                    taskElement(draggableProps, dragHandleProps, innerRef)
                )}
            </Draggable>
        ) : (
            taskElement()
        );
    }
}