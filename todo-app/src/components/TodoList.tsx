import type { Todo } from "./../types/todo";

import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
}

function TodoList({ todos }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
