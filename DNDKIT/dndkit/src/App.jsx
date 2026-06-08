import React, { useState } from "react";
import {
  closestCorners,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  KeyboardSensor,
  MouseSensor,
  TouchSensor
} from "@dnd-kit/core";

import { arrayMove } from "@dnd-kit/sortable";
import Column from "./components/Column/Column";
import Input from "./components/Input/Input";

// import { Droppable } from "./components/Droppable";
// import { Draggable } from "./components/Draggable";

function App() {
  // const [isDropped, setIsDropped] = useState(false);
  // const draggableMarkup = <Draggable>Drag me</Draggable>;
  // const droppableMarkup = <Droppable>Drop here</Droppable>;
  const [tasks, setTasks] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn DnDKit" },
    { id: "3", title: "Build something cool" }
  ]);

  const addTask = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setTasks((tasks) => {
        const originalPos = getTaskPos(active.id);
        const newPos = getTaskPos(over.id);

        return arrayMove(tasks, originalPos, newPos);
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor),
    useSensor(MouseSensor),
    useSensor(TouchSensor)
  );

  return (
    <div>
      <h1>Drag and Drop</h1>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <Input onSubmit={addTask} />
        <Column tasks={tasks} />
        {/* {!isDropped ? draggableMarkup : null}
        <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable> */}
      </DndContext>
    </div>
  );

  // function handleDragEnd(event) {
  //   if (event.over && event.over.id === "droppable") {
  //     setIsDropped(true);
  //   }
  // }
}
export default App;
