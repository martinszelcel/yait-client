import React, { useState } from "react";
import Panel from "../components/common/Panel";
import TaskList from "../components/task/TaskList";
import PanelGrid from "../components/PanelGrid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function Board() {
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
        <PanelGrid rows="1" cols="4">
            <DragDropContext onDragEnd={onDragEnd}>
                {Object.entries(taskBoard).map(([index, column]) => (
                    <Panel title={column.name} key={index} className="flex flex-col">
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