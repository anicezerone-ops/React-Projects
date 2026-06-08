import React from 'react'
import './Task.css'
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Task = ({id, title}) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="task">
      {title}
      <input type="checkbox" className='checkbox'/>
    </div>
  )
}

export default Task