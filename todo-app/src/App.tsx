import { useState } from "react";
import type { Todo } from "./types/todo";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  const addTodo = () => {
    if (!title.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <>
      <h1>Todo App</h1>
      <TodoInput title={title} setTitle={setTitle} addTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </>
  );
}

export default App;
