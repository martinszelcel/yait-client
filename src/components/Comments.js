import React from "react";
import Button from "../components/common/Button";
import UserCircle from "../components/UserCircle";
import DropdownMenu from "../components/common/DropdownMenu";
import DropdownMenuItem from "../components/common/DropdownMenuItem";
import FormField from "../components/common/FormField";
import tw from 'tailwind-styled-components';
import Icon from '@mdi/react';
import { mdiDotsHorizontal } from '@mdi/js';

const CommentContainer = tw.div`
    px-5 py-3
    border dark:border-gray-800 
    rounded-xl
    flex gap-3
    relative 
`

const CornerDropdownContainer = tw.div`
    absolute right-3 top-3
`

const Column = tw.div`
    flex flex-col gap-1
`

export default function Comments({comments}) {
  return (
    <>
      {comments.map(({ author, message }, index) => (
        <CommentContainer key={index}>
            <UserCircle firstName={author.firstName} lastName={author.lastName} />
            <Column>
                <span className="font-bold">
                    {author.firstName} {author.lastName}
                </span>
                <span>
                    {message}
                </span>
            </Column>
            <CornerDropdownContainer>
                <DropdownMenu 
                    className="p-1" 
                    button={() => <Icon path={mdiDotsHorizontal} size={1}/>} 
                    menuItems={[
                        <DropdownMenuItem>Edit</DropdownMenuItem>,
                        <DropdownMenuItem className="hover:bg-red-100 dark:hover:bg-red-600">
                            Remove
                        </DropdownMenuItem>
                    ]}
                />
            </CornerDropdownContainer>
        </CommentContainer>
      ))}
      <FormField type="textarea" placeholder="Leave your comment here..." />
      <div className="flex justify-end">
        <Button $color="green">
            Send
        </Button>
      </div>
    </>
  )
}