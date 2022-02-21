import React from "react";
import Team from "./Team";

export default function TeamList({teams}) {
    return teams.map((team, index) => (
        <Team name={team.name} color={team.color} members={team.members} key={index}/>
    ))
}