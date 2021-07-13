import React, { useState } from 'react';
import "tailwindcss/tailwind.css"
import AuthTestView from './AuthTestView';
import IssueTestView from './IssueTestView';
import ProjectTestView from './ProjectTestView';

const App = () => {
    const [accessToken, setAccessToken] = useState(
        sessionStorage.getItem('accessToken') || null
    );

    return (
        <div className="bg-gray-700 min-h-screen">
            <AuthTestView accessToken={accessToken} setAccessToken={setAccessToken}/>
            <IssueTestView accessToken={accessToken}/>
            <ProjectTestView accessToken={accessToken}/>
        </div>
    );
}

export default App;