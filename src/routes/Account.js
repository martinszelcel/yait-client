import React from 'react';
import { Route, Routes } from 'react-router';
import Panel from '../components/common/Panel';
import NavTab from '../components/common/NavTab'; 
import ThemeSwitch from '../components/ThemeSwitch';
import PanelGrid from '../components/PanelGrid';

export default function Account() {
    return (
        <PanelGrid>
            <Panel className="col-span-1 row-span-5 flex flex-col gap-3 lg:h-panel lg:min-h-panel overflow-scroll">
                <NavTab to="" name="General" />
                <NavTab to="security" name="Security" />
                <NavTab to="devices" name="Devices" />
            </Panel>
            <Routes>
                <Route path="/" element={
                    <Panel title="General" className="col-span-4 row-span-5 lg:h-panel lg:min-h-panel overflow-scroll">
                        <ThemeSwitch />
                    </Panel>
                } />
                <Route path="/security" element={
                    <Panel title="Security" className="col-span-4 row-span-5 lg:h-panel lg:min-h-panel overflow-scroll">
                        <ThemeSwitch />
                    </Panel>
                } />
                <Route path="/devices" element={
                    <Panel title="Devices" className="col-span-4 row-span-5 lg:h-panel lg:min-h-panel overflow-scroll">
                        <ThemeSwitch />
                    </Panel>
                } />
            </Routes>
        </PanelGrid>
       
    );
}