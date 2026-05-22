import type { Todo } from "../types/todo";

interface Props {
  todo: Todo;
}

function TodoItem({ todo }: Props) {
  return <li>{todo.title}</li>;
}

export default TodoItem;
