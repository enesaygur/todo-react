import type { Todo } from "./../types/todo";

import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
}

function TodoList({ todos, onDelete }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
