import React, { useState } from 'react';
import TaskList from './task/TaskList';
import Panel from './common/Panel';
import DropdownMenu from "./common/DropdownMenu";
import DropdownMenuItem from './common/DropdownMenuItem';
import Icon from '@mdi/react';
import { mdiDotsHorizontal } from '@mdi/js';
import { DragDropContext, Droppable } from "react-beautiful-dnd"

export default function MyTasks({tasks}) {
    const [taskList, setTaskList] = useState(tasks)

    const onDragEnd = ({ destination, source }) => {
        if (!destination) return;

        if (JSON.stringify(destination) == JSON.stringify(source)) return;
        
        const task = taskList.splice(source.index, 1)[0];
        taskList.splice(destination.index, 0, task);

        setTaskList(taskList);
    }

    return (           
        <Panel title="My tasks" className="col-span-2 row-span-5 flex flex-col">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="myTasks">
                    {({ innerRef, droppableProps, placeholder }) => (
                        <TaskList innerRef={innerRef} placeholder={placeholder} {...droppableProps} tasks={taskList} showStatus draggable />
                    )}
                </Droppable>
            </DragDropContext>
            <div className="absolute right-3 top-3">
                <DropdownMenu 
                    className="p-1" 
                    button={() => <Icon path={mdiDotsHorizontal} size={1}/>} 
                    menuItems={[
                        <DropdownMenuItem>Show done task</DropdownMenuItem>,
                        <DropdownMenuItem>Show tasks assigned to my teams</DropdownMenuItem>
                    ]}
                />
            </div>
        </Panel>
    )
}