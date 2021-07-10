import React, { useState } from 'react';
import Button from './elements/Button';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import MyDevicesModal from './auth/MyDevicesModal';
import axios from 'axios';

const TestView = () => {
    const [accessToken, setAccessToken] = useState(
        sessionStorage.getItem('accessToken') || null
    );
    const [refreshToken, setRefreshToken] = useState(
        localStorage.getItem('refreshToken') || null
    );

    const [registerModalOpen, setRegisterModalOpen] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [myDevicesModalOpen, setMyDevicesModalOpen] = useState(false);

    function handleRegisterButtonClick(e) {
        e.preventDefault();
        setRegisterModalOpen(true);
    }

    function handleRegisterModalClose(e) {
        if (e) e.preventDefault();
        setRegisterModalOpen(false);
    }

    function handleLoginButtonClick(e) {
        e.preventDefault();
        setLoginModalOpen(true);
    }

    function handleLoginModalClose(e) {
        if (e) e.preventDefault();
        setLoginModalOpen(false);
    }

    function handleRefreshTokenButtonClick(e) {
        e.preventDefault();
        axios.post('/api/auth/refreshToken', {refreshToken: refreshToken}).then(response => {
            const {accessToken, refreshToken} = response.data;
            updateTokens(accessToken, refreshToken);
        }).catch(error => {
        console.log(error.response.data ? error.response.data : error.response);
        });
    }

    function handleLogoutButtonClick(e) {
        e.preventDefault();
        // TODO
    }

    function handleMyDevicesButtonClick(e) {
        e.preventDefault();
        setMyDevicesModalOpen(true);
    }

    function handleMyDevicesModalClose(e) {
        if (e) e.preventDefault();
        setMyDevicesModalOpen(false);
    }

    function updateTokens(accessToken, refreshToken) {
        if (accessToken) {
            sessionStorage.setItem('accessToken', accessToken);
            setAccessToken(accessToken);
        }
        if (refreshToken) {
            localStorage.setItem('refreshToken', refreshToken);
            setRefreshToken(refreshToken);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
        <div className="border rounded-lg p-8 text-gray-900 shadow-lg text-center">
            <h1 className="text-2xl mb-4">Test View</h1>

            <div className="flex gap-5 justify-center py-4">
                <Button onClick={handleRegisterButtonClick}>Register</Button>
                <Button onClick={handleLoginButtonClick}>Login</Button>
                <Button onClick={handleRefreshTokenButtonClick}>Refresh token</Button>
                <Button onClick={handleLogoutButtonClick}>Logout</Button>
                <Button onClick={handleMyDevicesButtonClick}>My devices</Button>
            </div>

            <RegisterModal open={registerModalOpen} onClose={handleRegisterModalClose} updateTokens={updateTokens} />
            <LoginModal open={loginModalOpen} onClose={handleLoginModalClose} updateTokens={updateTokens} />
            <MyDevicesModal open={myDevicesModalOpen} onClose={handleMyDevicesModalClose} accessToken={accessToken} />

            <hr className="my-4"/>

            <h3>Access Token</h3>
            <small className="break-all">{accessToken ? accessToken : "No token found!"}</small>

            <hr className="my-4"/>

            <h3>Refresh Token</h3>
            <small className="break-all">{refreshToken ? refreshToken : "No token found!"}</small>

        </div>
        </div>
  );
};

export default TestView;