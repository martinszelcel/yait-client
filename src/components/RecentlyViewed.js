import React from "react";
import SquareItem from './SquareItem';
import Panel from './common/Panel';
import { Link } from "react-router-dom";

export default function RecentlyVieved() {
    return (
        <Panel title="Recently viewed" className="col-span-3 row-span-2 relative">
            <div className="flex flex-wrap">
                <SquareItem who="You" what="checked" where="Jeff's" end="profile" />
                <SquareItem who="You" what="visited" where="My project" end="page" color="green" />
                <SquareItem who="You" what="added" where="Jeff" end="to your team" color="yellow" />
            </div>
            <div className="absolute right-4 bottom-4 text-xs">
                <Link to="recentlyVieved">
                    View more...
                </Link>
            </div>
        </Panel>
    )
}