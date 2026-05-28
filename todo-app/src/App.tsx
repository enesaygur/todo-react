import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import useTodos from "./hooks/useTodos";

function App() {
  const [title, setTitle] = useState("");
  const { todos, addTodo, deleteTodo, toggleTodo, filter, setFilter, editTodo } =
    useTodos();
  const handleAddTodo = () => {
    addTodo(title);
    setTitle("");
  };
  return (
    <>
      <div>
        <button onClick={() => setFilter("all")} disabled={filter === "all"}>
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          disabled={filter === "active"}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          disabled={filter === "completed"}
        >
          Completed
        </button>
      </div>
      <h1>Todo App</h1>
      <TodoInput title={title} setTitle={setTitle} addTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={editTodo}
      />
    </>
  );
}

export default App;
