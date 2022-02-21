import React from 'react';
import { Route, Routes } from 'react-router';
import NavTab from '../components/common/NavTab';
import Panel from '../components/common/Panel';
import Separator from '../components/common/Separator';
import PanelGrid from '../components/PanelGrid';
import ThemeSwitch from '../components/ThemeSwitch';

export default function Settings() {
    return (
        <PanelGrid>
            <Panel className="col-span-1 row-span-5 flex flex-col gap-3 lg:h-panel lg:min-h-panel overflow-scroll">
                <NavTab to="" name="General" />
                <NavTab to="advanced" name="Advanced" />
                <Separator />
                <NavTab to="about" name="About" />
            </Panel>
            <Routes>
                <Route path="/" element={
                    <Panel title="General settings" className="col-span-4 row-span-5 lg:h-panel lg:min-h-panel overflow-scroll">
                        <ThemeSwitch />
                    </Panel>
                } />
                <Route path="/advanced" element={
                    <Panel title="Advanced settings" className="col-span-4 row-span-5 lg:h-panel lg:min-h-panel overflow-scroll">
                        <ThemeSwitch />
                    </Panel>
                } />
                <Route path="/about" element={
                    <Panel title="About" className="col-span-4 row-span-5 lg:h-panel lg:min-h-panel overflow-scroll">
                        <ThemeSwitch />
                    </Panel>
                } />
            </Routes>
        </PanelGrid>
    );
}