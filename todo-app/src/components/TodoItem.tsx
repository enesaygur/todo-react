import { useState } from "react";
import type { Todo } from "../types/todo";
import { useTodoContext } from "../context/TodoContext";

interface Props {
  todo: Todo;
}

function TodoItem({ todo }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const { deleteTodo, toggleTodo, editTodo } = useTodoContext();
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
          onClick={() => toggleTodo(todo.id)}
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
            editTodo(todo.id, editedTitle);
            setIsEditing(false);
          }}
        >
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
