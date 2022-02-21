import React, {useContext} from "react";
import Home from './routes/Home';
import Settings from './routes/Settings';
import Teams from './routes/Teams';
import Navbar from './components/navbar/Navbar';
import { StorageContext } from './contexts/StorageContext';
import { Routes, Route } from 'react-router-dom';
import Task from "./routes/Task";
import Account from "./routes/Account";
import Login from "./routes/Login";
import Board from "./routes/Board";
import Project from "./routes/Project";
import Projects from "./routes/Projects";

export default function Layout() {
    const { isDarkMode } = useContext(StorageContext)

    if (isDarkMode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    const isLoggedIn = true;
        

    return (
        <div className="flex flex-col gap-3 p-2 md:px-8 md:py-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-all duration-300 ease-in-out">
            
            { isLoggedIn ? (
                <>
                    <Navbar />
                    
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/board" element={<Board />} />
                        <Route path="/teams/*" element={<Teams />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/*" element={<Project />} />
                        <Route path="/task/*" element={<Task />} />
                        <Route path="/settings/*" element={<Settings />} />
                        <Route path="/account/*" element={<Account />} />
                    </Routes>
                </>
            ) : (
                <Login />
            )}
        </div>
    )
}