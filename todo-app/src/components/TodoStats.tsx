import { useTodoContext } from "../context/TodoContext";

function TodoStats() {
  const { todos } = useTodoContext();
  const remainingTodos = todos.filter((todo) => !todo.completed).length;
  return <p>{remainingTodos} tasks left</p>;
}
export default TodoStats;
