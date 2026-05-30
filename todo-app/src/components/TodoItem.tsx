import { useState } from "react";
import type { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

function TodoItem({ todo, onDelete, onToggle, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  return (
    <li>
      {isEditing ? (
        <input
          autoFocus
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onEdit(todo.id, editedTitle);
              setIsEditing(false);
            }
            if (e.key === "Escape") {
              setEditedTitle(todo.title);
              setIsEditing(false);
            }
          }}
        />
      ) : (
        <span
          onClick={() => onToggle(todo.id)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.title}
        </span>
      )}

      {isEditing ? (
        <button
          onClick={() => {
            onEdit(todo.id, editedTitle);
            setIsEditing(false);
          }}
        >
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
