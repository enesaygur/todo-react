import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import useTodos from "./hooks/useTodos";

function App() {
  const [title, setTitle] = useState("");
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();
  const handleAddTodo = () => {
    addTodo(title);
    setTitle("");
  };
  return (
    <>
      <h1>Todo App</h1>
      <TodoInput title={title} setTitle={setTitle} addTodo={handleAddTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </>
  );
}

export default App;
