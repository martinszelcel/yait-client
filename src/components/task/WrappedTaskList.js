import React from 'react';
import TaskList from './TaskList';
import { Droppable } from 'react-beautiful-dnd';

export default function WrappedTaskList({title, tasks, draggable, id}) {
  const taskListProps = {
    tasks, 
    showAssigned: true,
    showStatus: true,
    draggable,
    className: 'p-2 border dark:border-gray-800 rounded-b-xl'
  }

  return (
    <div className="flex flex-col flex-grow">
      <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-t-xl">
          {title}
      </div>
      {draggable ? (
        <Droppable droppableId={id}>
          {({ innerRef, droppableProps, placeholder }) => (
              <TaskList innerRef={innerRef} placeholder={placeholder} {...droppableProps} {...taskListProps} />
          )}
        </Droppable>
      ) : (
        <TaskList {...taskListProps} />
      )}
    </div>
  ) 
}
