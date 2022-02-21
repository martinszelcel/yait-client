import React, { useState } from "react";
import Panel from "../components/common/Panel";
import TaskList from "../components/task/TaskList";
import PanelGrid from "../components/PanelGrid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { mdiArrowLeft, mdiEye, mdiKey, mdiPencil } from '@mdi/js';
import Icon from '@mdi/react';
import { Link } from "react-router-dom";
import DropdownMenu from "../components/common/DropdownMenu";
import DropdownMenuItem from "../components/common/DropdownMenuItem";
import Button from "../components/common/Button";

export default function Project() {
    const [taskBoard, setTaskBoard] = useState({
        todo: {
            name: "To do",
            tasks: [
                {
                    id: 1,
                    title: "Test task",
                    projectName: "My project",
                    status: "To do",
                    assignedUser: {
                        firstName: "Martin",
                        lastName: "Szelcel"
                    }
                },
                {
                    id: 2,
                    title: "Test task 2",
                    projectName: "My project",
                    status: "In progress",
                    color: "yellow",
                    assignedUser: {
                        firstName: "Jeff",
                        lastName: "Example"
                    }
                },
                {
                    id: 3,
                    title: "Test task 3",
                    projectName: "My project",
                    status: "Done",
                    color: "red",
                    isDone: true,
                    assignedUser: {
                        firstName: "Jeff",
                        lastName: "Example"
                    }
                },
                {
                    id: 4,
                    title: "Test task 4",
                    projectName: "My project",
                    status: "Testing",
                    color: "green",
                    assignedUser: {
                        firstName: "Martin",
                        lastName: "Szelcel"
                    }
                }
            ]
        },
        inProgress: {
            name: "In progress",
            tasks: [
                {
                    id: 5,
                    title: "Test task",
                    projectName: "My project",
                    status: "To do",
                    assignedUser: {
                        firstName: "Martin",
                        lastName: "Szelcel"
                    }
                },
                {
                    id: 6,
                    title: "Test task 2",
                    projectName: "My project",
                    status: "In progress",
                    color: "yellow",
                    assignedUser: {
                        firstName: "Jeff",
                        lastName: "Example"
                    }
                },
                {
                    id: 7,
                    title: "Test task 3",
                    projectName: "My project",
                    status: "Done",
                    color: "red",
                    isDone: true,
                    assignedUser: {
                        firstName: "Jeff",
                        lastName: "Example"
                    }
                },
                {
                    id: 8,
                    title: "Test task 4",
                    projectName: "My project",
                    status: "Testing",
                    color: "green",
                    assignedUser: {
                        firstName: "Martin",
                        lastName: "Szelcel"
                    }
                }
            ]
        },
        testing: {
            name: "Testing",
            tasks: [
                {
                    id: 9,
                    title: "Test task",
                    projectName: "My project",
                    status: "To do",
                    assignedUser: {
                        firstName: "Martin",
                        lastName: "Szelcel"
                    }
                },
                {
                    id: 10,
                    title: "Test task 2",
                    projectName: "My project",
                    status: "In progress",
                    color: "yellow",
                    assignedUser: {
                        firstName: "Jeff",
                        lastName: "Example"
                    }
                },
                {
                    id: 11,
                    title: "Test task 3",
                    projectName: "My project",
                    status: "Done",
                    color: "red",
                    isDone: true,
                    assignedUser: {
                        firstName: "Jeff",
                        lastName: "Example"
                    }
                },
                {
                    id: 12,
                    title: "Test task 4",
                    projectName: "My project",
                    status: "Testing",
                    color: "green",
                    assignedUser: {
                        firstName: "Martin",
                        lastName: "Szelcel"
                    }
                }
            ]
        },
        done :{
            name: "Done",
            tasks: [
                {
                    id: 13,
                    title: "Test task",
                    projectName: "My project",
                    status: "To do",
                    assignedUser: {
                        firstName: "Martin",
                        lastName: "Szelcel"
                    }
                },
                {
                    id: 14,
                    title: "Test task 2",
                    projectName: "My project",
                    status: "In progress",
                    color: "yellow",
                    assignedUser: {
                        firstName: "Jeff",
                        lastName: "Example"
                    }
                },
                {
                    id: 15,
                    title: "Test task 3",
                    projectName: "My project",
                    status: "Done",
                    color: "red",
                    isDone: true,
                    assignedUser: {
                        firstName: "Jeff",
                        lastName: "Example"
                    }
                },
                {
                    id: 16,
                    title: "Test task 4",
                    projectName: "My project",
                    status: "Testing",
                    color: "green",
                    assignedUser: {
                        firstName: "Martin",
                        lastName: "Szelcel"
                    }
                }
            ]
        }
    });

    const onDragEnd = ({ destination, source }) => {
        if (!destination) return;

        if (JSON.stringify(destination) == JSON.stringify(source)) return;

        const sourceColumn = taskBoard[source.droppableId];
        const destinationColumn = taskBoard[destination.droppableId];

        const task = sourceColumn.tasks.splice(source.index, 1)[0];
        destinationColumn.tasks.splice(destination.index, 0, task)

        setTaskBoard({
            ...taskBoard,
            [source.droppableId]: {
                ...sourceColumn
            },
            [destination.droppableId]: {
                ...destinationColumn
            }
        });
    }

    return (
        <PanelGrid rows="6" cols="4">
            <Panel className="col-span-4" title="YAIT Project">
                <div className="w-full bg-white dark:bg-gray-400 rounded-full h-4 flex mt-6">
                    <div className="w-full h-4 relative">
                        <div className="bg-blue-300 dark:bg-blue-600 w-full rounded-l-full h-full opacity-50 absolute top-0 left-0"></div>
                        <div className="w-48 bg-blue-300 dark:bg-blue-600 h-4 rounded-l-full rounded-r-full text-xs text-center font-bold absolute top-0 left-0">
                            60%
                        </div>
                        <div className="w-full text-xs text-center font-bold absolute top-5 left-0">
                            MVP
                        </div>
                    </div>
                    <div className="w-full h-4 relative">
                        <div className="bg-yellow-300 dark:bg-yellow-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                        <div className="w-24 bg-yellow-300 dark:bg-yellow-600 rounded-r-full h-4 text-xs text-center font-bold absolute top-0 left-0">
                            30%
                        </div>
                        <div className="w-full text-xs text-center font-bold absolute top-5 left-0">
                            Documentation
                        </div>
                    </div>
                    <div className="w-full h-4 relative">
                        <div className="bg-green-300 dark:bg-green-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                        <div className="w-16 bg-green-300 dark:bg-green-600 rounded-r-full h-4 text-xs text-center font-bold absolute top-0 left-0">
                            12%
                        </div>
                        <div className="w-full text-xs text-center font-bold absolute top-5 left-0">
                            Improvements
                        </div>
                    </div>
                    <div className="w-full h-4 relative">
                        <div className="bg-purple-300 dark:bg-purple-600 w-full h-full opacity-50 absolute top-0 left-0"></div>
                        <div className="w-20 bg-purple-300 dark:bg-purple-600 rounded-r-full h-4 text-xs text-center font-bold absolute top-0 left-0">
                            22%
                        </div>
                        <div className="w-full text-xs text-center font-bold absolute top-5 left-0">
                            Integrations
                        </div>
                    </div>
                    <div className="w-full h-4 relative">
                        <div className="bg-pink-300 dark:bg-pink-600 rounded-r-full w-full h-full opacity-50 absolute top-0 left-0"></div>
                        <div className="w-8 bg-pink-300 dark:bg-pink-600 rounded-r-full h-4 text-xs text-center font-bold absolute top-0 left-0">
                            6%
                        </div>
                        <div className="w-full text-xs text-center font-bold absolute top-5 left-0">
                            Theme Engine
                        </div>
                    </div>
                </div>

                <Link to="." className="absolute top-3 left-3 flex items-center gap-1">
                    <Icon path={mdiArrowLeft} size={1}/>
                    Go back
                </Link>
                <div className="absolute top-3 right-3 flex justify-end items-center gap-3">
                    <DropdownMenu 
                        className="p-2"
                        button={() => (
                            <div className="flex items-center gap-1">
                                <Icon path={mdiEye} size={1}/>
                                <span>Public</span>
                            </div>
                        )} 
                        menuItems={[
                            <DropdownMenuItem>
                                <Icon path={mdiKey} size={1}/>
                                <span>Private</span>
                            </DropdownMenuItem>
                        ]}
                    />
                    <Link to="./edit" className="p-2 flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-800
                            rounded-xl 
                            transition duration-300 ease-in-out">
                        <Icon path={mdiPencil} size={1}/>
                        <span>Edit</span>
                    </Link>
                </div>
            </Panel>
            <DragDropContext onDragEnd={onDragEnd}>
                {Object.entries(taskBoard).map(([index, column]) => (
                    <Panel title={column.name} key={index} className="flex flex-col row-span-5">
                        <Droppable droppableId={index}>
                            {({ innerRef, droppableProps, placeholder }) => (
                                <TaskList innerRef={innerRef} placeholder={placeholder} {...droppableProps} tasks={column.tasks} draggable showAssigned />
                            )}
                        </Droppable>
                    </Panel>
                ))}
            </DragDropContext>
        </PanelGrid>
    )
}