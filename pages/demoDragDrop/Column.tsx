import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

type Props = {
  tasklist: any;
};
let TaskItem = styled.div`
  padding: 10px 5px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
`;
const Column = (props: Props) => {
  return (
    <Droppable droppableId="test">
      {(provided): any => {
        return (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasklist.map((init: any, index: number) => {
              return (
                <Draggable
                  key={init.id}
                  draggableId={init.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => {
                    return (
                      <TaskItem
                        className={snapshot.isDragging ? "active" : ""}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {init.name}
                      </TaskItem>
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default Column;
