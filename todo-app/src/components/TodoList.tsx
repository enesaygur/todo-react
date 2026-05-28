import type { Todo } from "./../types/todo";

import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

function TodoList({ todos, onDelete, onToggle, onEdit }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
      ))}
    </ul>
  );
}

export default TodoList;
