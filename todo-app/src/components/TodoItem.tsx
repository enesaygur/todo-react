import type { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

function TodoItem({ todo, onDelete, onToggle }: Props) {
  return (
    <li>
      <span
        onClick={() => onToggle(todo.id)}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo.id)}>Sil</button>
    </li>
  );
}

export default TodoItem;
