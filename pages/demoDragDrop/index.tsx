import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

type Props = {};
let Container = styled.div`
  width: 60%;
  margin: auto;
  height: 100vh;
`;

const ComponentOffSSR = dynamic(() => import("./Column"), { ssr: false });
const reorderTask = (
  task: { id: string; name: string }[],
  startIndex: number,
  endIndex: number
) => {
  const taskNew = [...task];
  const [remove] = taskNew.splice(startIndex, 1);
  console.log(remove, "remove");
  taskNew.splice(endIndex, 0, remove);
  return taskNew;
};
const DemoDragDrop = (props: Props) => {
  let [initState, setInitState] = useState([
    { id: "1", name: "Huy" },
    { id: "2", name: "Hằng" },
    { id: "3", name: "Nguyên" },
  ]);

  let onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const newTask = reorderTask(initState, source.index, destination.index);
    setInitState(newTask);
  };


  return (
    <div>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <Container>
          <ComponentOffSSR tasklist={initState} />
        </Container>
      </DragDropContext>
    </div>
  );
};

export default DemoDragDrop;
