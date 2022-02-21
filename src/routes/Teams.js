import Icon from "@mdi/react";
import React, {useState} from "react";
import Panel from "../components/common/Panel";
import Separator from "../components/common/Separator";
import Team from "../components/team/Team";
import { mdiAccountMultiplePlus, mdiDotsHorizontal } from '@mdi/js';
import DropdownMenu from "../components/common/DropdownMenu";
import DropdownMenuItem from "../components/common/DropdownMenuItem";
import TeamList from "../components/team/TeamList";
import WrappedTaskList from "../components/task/WrappedTaskList";
import { DragDropContext } from 'react-beautiful-dnd';
import PanelGrid from "../components/PanelGrid";
import tw from 'tailwind-styled-components';
import { Link } from "react-router-dom";
import SquareButton from "../components/SquareButton";

const TeamsPanel = tw(Panel)`
    col-span-1 row-span-5 
    lg:min-h-full lg:overflow-scroll
`

const TeamDetailsPanel = tw(Panel)`
    col-span-4 row-span-5 
    flex flex-col gap-3 
    overflow-scroll
`

const TeamDescriptionContainer = tw.div`
    px-4 py-2
    border dark:border-gray-800
    rounded-xl 
`

const TeamMembersContainer = tw.div`
    flex gap-3 flex-grow
    overflow-x-scroll overflow-y-hidden
`

const CornerDropdownContainer = tw.div`
    absolute right-3 top-3
`

const TaskBoardContainer = tw.div`
  xl:grid xl:grid-rows-1 xl:grid-cols-4 
  flex flex-col gap-3 flex-grow 
  xl:overflow-hidden
`

export default function Teams() {
    const team = {
        name: "Team 1",
        description: "This is a description of team 1",
        members: [
            {
                firstName: "Martin",
                lastName: "Szelcel",
                color: "green"
            },
            {
                firstName: "Jeff",
                lastName: "Example"
            },
            {
                firstName: "Jeff",
                lastName: "Example"
            },
            {
                firstName: "Jeff",
                lastName: "Example"
            },
            {
                firstName: "Jeff",
                lastName: "Example"
            },
            {
                firstName: "Jeff",
                lastName: "Example"
            },
            {
                firstName: "Jeff",
                lastName: "Example"
            },
            {
                firstName: "Jeff",
                lastName: "Example"
            },
            {
                firstName: "Jeff",
                lastName: "Example"
            },
            {
                firstName: "Jeff",
                lastName: "Example"
            },
            {
                firstName: "Jeff",
                lastName: "Example"
            },
            {
                firstName: "Jeff",
                lastName: "Example"
            },
        ]
    };

    const teamsList = [
        {
            name: "Team 1",
            color: "blue",
            description: "This is a description of team 1",
            members: [
                {
                    firstName: "Martin",
                    lastName: "Szelcel",
                    color: "green"
                },
                {
                    firstName: "Jeff",
                    lastName: "Example"
                }
            ]
        },
        {
            name: "Team 2",
            color: "green",
            description: "This is a description of team 1",
            members: [
                {
                    firstName: "Adam",
                    lastName: "Something",
                    color: "pink"
                },
                {
                    firstName: "Jeff",
                    lastName: "Example",
                    color: "yellow"
                }
            ]
        },
        {
            name: "Team 3",
            color: "pink",
            description: "This is a description of team 1",
            members: [
                {
                    firstName: "Martin",
                    lastName: "Szelcel",
                    color: "green"
                },
                {
                    firstName: "Jeff",
                    lastName: "Example"
                }
            ]
        },
        {
            name: "Team 4",
            color: "indigo",
            description: "This is a description of team 1",
            members: [
                {
                    firstName: "Martin",
                    lastName: "Szelcel",
                    color: "green"
                },
                {
                    firstName: "Jeff",
                    lastName: "Example"
                }
            ]
        },
        {
            name: "Team 5",
            color: "red",
            description: "This is a description of team 1",
            members: [
                {
                    firstName: "Martin",
                    lastName: "Szelcel",
                    color: "green"
                },
                {
                    firstName: "Jeff",
                    lastName: "Example"
                }
            ]
        }
    ]

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
        <PanelGrid>
            <TeamsPanel>
                <div className="flex gap-3 lg:flex-col overflow-scroll pb-4 lg:pb-0">
                    <TeamList teams={teamsList} />
                    <Separator />
                    {/* <div className="border-l border-t"></div> */}
                    <Team name="Test 5" color="green" />
                    <Team name="Test 6" color="blue" />
                    <Team name="Test 7" color="pink" />
                    <Team name="Test 8" color="indigo" />
                    <Team name="Test 9" color="gray" />
                    <Team name="Test 10" color="red" />
                    <Team name="Test 11" color="yellow" />
                    <Team name="Test 12" color="purple" />
                </div>
            </TeamsPanel>
            <TeamDetailsPanel title={team.name}>
                <h2>Description:</h2>
                <TeamDescriptionContainer>
                    {team.description}
                </TeamDescriptionContainer>

                <h2>Members:</h2>
                <TeamMembersContainer>
                  {/* <UserSquare user={user} key={index} color={user.color} /> */}
                    {team.members.map((user, index) => (
                      <SquareButton
                        text={`${user.firstName} ${user.lastName}`} 
                        icon={user.firstName.charAt(0) + user.lastName.charAt(0)}
                        color={user.color || "blue"} 
                        key={index} />
                    ))}
                    <Link to="#">
                      <SquareButton
                          text="Add users"
                          icon={<Icon path={mdiAccountMultiplePlus} size={1} />}
                      />
                    </Link>
                </TeamMembersContainer>

                <h2>Tasks:</h2>
                <TaskBoardContainer>
                    <DragDropContext onDragEnd={onDragEnd}>
                        {Object.entries(taskBoard).map(([index, column]) => (
                            <WrappedTaskList title={column.name} id={index} key={index} tasks={column.tasks} draggable />
                        ))}
                    </DragDropContext>
                </TaskBoardContainer>

                <CornerDropdownContainer>
                    <DropdownMenu 
                        className="p-1" 
                        button={() => <Icon path={mdiDotsHorizontal} size={1}/>} 
                        menuItems={[
                            <DropdownMenuItem>Edit</DropdownMenuItem>,
                            <DropdownMenuItem className="hover:bg-red-300 dark:hover:bg-red-500">
                                Remove
                            </DropdownMenuItem>
                        ]}
                    />
                </CornerDropdownContainer>
            </TeamDetailsPanel>
        </PanelGrid>
    )
}