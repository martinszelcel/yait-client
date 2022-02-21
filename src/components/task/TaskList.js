import React from 'react';
import Task from './Task';

export default function TaskList({tasks, draggable, showStatus, showAssigned, className, innerRef, placeholder}) {
    return (
        <div className={`flex flex-col flex-grow lg:overflow-scroll ${className}`} ref={innerRef}>
            {tasks.map((task, index) => (
                <Task task={task} draggable={draggable} showStatus={showStatus} showAssigned={showAssigned} index={index} key={task.id}/>
            ))} 
            {draggable && placeholder}
        </div>
    )
}