import React, { useState } from 'react';
import "tailwindcss/tailwind.css"
import {BrowserRouter as Router} from 'react-router-dom';
import StorageContextProvider from './contexts/StorageContext';
import Layout from './Layout';


export default function App() {
    const [accessToken, setAccessToken] = useState(
        sessionStorage.getItem('accessToken') || null
    );

    return (
        <Router>
            <StorageContextProvider>
               <Layout />
            </StorageContextProvider>
        </Router>
    );
}
