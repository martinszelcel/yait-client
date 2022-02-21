import React from "react";
import tw from 'tailwind-styled-components';
import DropdownMenuItem from "./common/DropdownMenuItem";
import UserCircle from "../components/UserCircle";

const Container = tw(DropdownMenuItem)`
    flex items-center gap-2
`

export default function UserDropdownMenuItem({user}) {
  return (
    <Container>
        <UserCircle firstName={user.firstName} lastName={user.lastName} color="yellow" />
        <span className="font-bold">{user.firstName} {user.lastName}</span>
    </Container>
  )
}