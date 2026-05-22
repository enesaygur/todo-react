import { useState } from "react";
import type { Todo } from "./types/todo";
import TodoList from "./components/TodoList";

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

  return (
    <>
      <h1>Todo App</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo yaz..."
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodo();
        }}
      />
      <button onClick={addTodo}>Ekle</button>

      <TodoList todos={todos} />
    </>
  );
}

export default App;
