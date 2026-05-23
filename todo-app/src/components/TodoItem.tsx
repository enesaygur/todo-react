import type { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onDelete }: Props) {
  return (
    <li>
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>Sil</button>
    </li>
  );
}

export default TodoItem;
