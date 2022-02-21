import React from 'react';
import LastActivity from '../components/LastActivity';
import MyTasks from '../components/MyTasks';
import PanelGrid from '../components/PanelGrid';
import RecentlyVieved from '../components/RecentlyViewed';

export default function Home() {
    const taskList = [
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
                firstName: "Martin",
                lastName: "Szelcel"
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
                firstName: "Martin",
                lastName: "Szelcel"
            }
        },
        {
            id: 4,
            title: "Test task 4",
            projectName: "My project",
            status: "Testing",
            color: "green",
            assignedUser: {
                firstName: "Jeff",
                lastName: "Example"
            }
        },
        {
            id: 5,
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
            id: 6,
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
            id: 7,
            title: "Test task",
            projectName: "My project",
            status: "To do",
            assignedUser: {
                firstName: "Martin",
                lastName: "Szelcel"
            }
        },
        {
            id: 8,
            title: "Test task 2",
            projectName: "My project",
            status: "In progress",
            color: "yellow",
            assignedUser: {
                firstName: "Martin",
                lastName: "Szelcel"
            }
        },
        {
            id: 9,
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
            id: 10,
            title: "Test task",
            projectName: "My project",
            status: "To do",
            assignedUser: {
                firstName: "Jeff",
                lastName: "Example"
            }
        },
        {
            id: 11,
            title: "Test task 2",
            projectName: "My project",
            status: "In progress",
            color: "yellow",
            assignedUser: {
                firstName: "Martin",
                lastName: "Szelcel"
            }
        },
        {
            id: 12,
            title: "Test task 3",
            projectName: "My project",
            status: "Done",
            color: "red",
            isDone: true,
            assignedUser: {
                firstName: "Jeff",
                lastName: "Example"
            }
        }
    ]

    return (
        <PanelGrid>
            <MyTasks tasks={taskList} />
            <RecentlyVieved />
            <LastActivity />
        </PanelGrid>
    );
}