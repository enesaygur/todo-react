import type { Todo } from "./../types/todo";

import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

function TodoList({ todos, onDelete, onToggle }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default TodoList;
