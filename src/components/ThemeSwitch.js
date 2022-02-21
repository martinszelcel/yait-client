import React, { useContext } from "react";
import { StorageContext } from '../contexts/StorageContext';
import Switch from "./common/Switch";

export default function ThemeSwitch() {
    const { darkModeType, setDarkMode } = useContext(StorageContext);

    const onDarkModeChange = (e) => {
        setDarkMode(e.target.value);
    }

    const states = ["Auto", "White", "Dark"]

    return (
        <>
            <div className="mb-4">Theme</div>
            <Switch currentState={darkModeType} onChange={onDarkModeChange} states={states} name="darkMode" />
        </>
    )
}