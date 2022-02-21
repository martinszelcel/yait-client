import React from "react";
import SquareItem from './SquareItem';
import Panel from './common/Panel';
import { Link } from "react-router-dom";

export default function LastActivity() {
    return (
        <Panel title="Last activity" className="col-span-3 row-span-3 relative">
            <div className="flex flex-wrap">
                <SquareItem who="Jeff" what="closed" where="Add last activity view" end="issue" color="red" />
                <SquareItem who="Jeff" what="changed status of" where="Add last activity view" end="issue" color="purple" />
                <SquareItem who="You" what="assigned" where="Add last activity view" end="issue to Jeff" color="pink" />
                <SquareItem who="You" what="checked" where="Jeff's" end="profile" />
                <SquareItem who="You" what="visited" where="My project" end="page" color="green" />
                <SquareItem who="You" what="added" where="Jeff" end="to your team" color="yellow" />
            </div>
            <div className="absolute right-4 bottom-4 text-xs">
                <Link to="lastActivity">
                    View more...
                </Link>
            </div>
        </Panel>
    )
}