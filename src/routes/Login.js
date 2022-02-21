import React from "react";
import Panel from "../components/common/Panel";
import Brand from "../components/brand/Brand";
import FormField from "../components/common/FormField";
import Button from "../components/common/Button";

export default function Login() {
    return (
        <Panel className="flex flex-col items-center justify-center gap-3 h-panel-xl">
            <div className="mb-8 flex flex-col items-center gap-3">
                <Brand isLarge={true} />
                <h1 className="font-bold uppercase text-lg">Yet Another Issue Tracker</h1>
            </div>
            <div className="flex flex-col items-center mb-2">
                <h2 className="font-bold">Welcome!</h2>
                <h3>Please log in to continue.</h3>
            </div>
            <FormField id="email" name="E-mail" />
            <FormField id="password" name="Password" />
            <Button>Login</Button>
        </Panel>
    )
}