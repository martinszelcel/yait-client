import React from "react";
import Panel from "../components/common/Panel";
import FormField from "../components/common/FormField";
import Icon from '@mdi/react';
import { mdiDotsHorizontal } from '@mdi/js';
import UserCircle from "../components/UserCircle";
import DropdownMenu from "../components/common/DropdownMenu";
import DropdownMenuItem from "../components/common/DropdownMenuItem";
import tw from 'tailwind-styled-components';
import UserDropdownMenuItem from "../components/UserDropdownMenuItem";
import Comments from "../components/Comments";
import PanelGrid from "../components/PanelGrid";

const TaskDetailsContainer = tw(Panel)`
    col-span-4 row-span-5 
    lg:min-h-full 
    overflow-scroll 
    flex flex-col gap-3 
    relative
`

const TaskDescriptionContainer = tw.div`
    px-5 py-3
    border dark:border-gray-800 
    rounded-xl 
`

const CornerDropdownContainer = tw.div`
    absolute right-3 top-3
`

const TaskIdContainer = tw.div`
    absolute left-3 top-3
    opacity-60
`

const Column = tw.div`
    flex flex-col gap-1
`

const SidebarElementContainer = tw.div`
    p-2 
    flex items-center gap-2
`

const Bold = tw.span`
    font-bold
`

const TaskSidebarContainer = tw(Panel)`
    col-span-1 row-span-5 
    lg:min-h-full lg:overflow-scroll 
    flex flex-col gap-5
`

export default function Task() {
    const task = {
        id: 1,
        title: "Create a task view",
        projectName: "YAIT Project",
        status: "In progress",
        description: "It would be nice if we had a view to display all info about a specific task.",
        comments: [
            {
                author: {
                    firstName: "Martin",
                    lastName: "Szelcel"
                },
                message: "It seems like a good idea! Go ahead :)"
            }
        ],
        creator: {
            firstName: "Jeff",
            lastName: "Example"
        },
        assignedUser: {
            firstName: "Jeff",
            lastName: "Example"
        }
    }

    const statusOptions = [
        "To do",
        "In progress",
        "Testing",
        "Done"
    ]

    return (
        <PanelGrid>
            <TaskDetailsContainer title={task.title}>
                <h2>Description:</h2>
                <TaskDescriptionContainer>
                    {task.description}
                </TaskDescriptionContainer>

                <h2>Comments:</h2>
                <Comments comments={task.comments} />
                
                <TaskIdContainer>
                    #{task.id}
                </TaskIdContainer>
                <CornerDropdownContainer>
                    <DropdownMenu 
                        className="p-1" 
                        button={() => <Icon path={mdiDotsHorizontal} size={1}/>} 
                        menuItems={[
                            <DropdownMenuItem>Edit</DropdownMenuItem>,
                            <DropdownMenuItem className="hover:bg-red-100 dark:hover:bg-red-600">
                                Remove
                            </DropdownMenuItem>
                        ]}
                    />
                </CornerDropdownContainer>
            </TaskDetailsContainer>
            <TaskSidebarContainer>
                <Column>
                    Assigned to: 
                    <DropdownMenu 
                        dropdownClassName="top-16"
                        button={() => (
                            <SidebarElementContainer>
                                <UserCircle firstName={task.assignedUser.firstName} lastName={task.assignedUser.lastName} color="yellow" />
                                <Bold>{task.assignedUser.firstName} {task.assignedUser.lastName}</Bold>
                            </SidebarElementContainer>
                        )}
                        menuItems={[
                            <UserDropdownMenuItem user={task.assignedUser} />,
                            <UserDropdownMenuItem user={task.assignedUser} />
                        ]}
                    >
                    </DropdownMenu>
                </Column>
                <Column>
                    <FormField id="status" name="Status" type="select" options={statusOptions} value={task.status} />
                </Column>
                <Column>
                    Created by: 
                    <SidebarElementContainer>
                        <UserCircle firstName={task.creator.firstName} lastName={task.creator.lastName} color="yellow" />
                        <Bold>{task.creator.firstName} {task.creator.lastName}</Bold>
                    </SidebarElementContainer>
                </Column>
                <Column>
                    Project: 
                    <span className="p-2">
                        {task.projectName}
                    </span>
                </Column>
            </TaskSidebarContainer>
        </PanelGrid>
    )
}