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
  return (
    <>
      <h1>Todo App</h1>
      <TodoInput title={title} setTitle={setTitle} addTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </>
  );
}

export default App;
