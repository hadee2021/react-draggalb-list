import React from 'react'
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import './App.css'

interface Props {
  user: any
}

const User = ({ user }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="user-card"
    >
      <h1>{user.name}</h1>
      <button onClick={() => console.log("상세")}>상세</button>
    </div>
  )
}

export default User