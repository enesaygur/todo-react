import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import useTodos from "./hooks/useTodos";

function App() {
  const [title, setTitle] = useState("");
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    filter,
    setFilter,
    editTodo,
    clearCompleted,
  } = useTodos();
  const handleAddTodo = () => {
    addTodo(title);
    setTitle("");
  };
  return (
    <>
      <div>
        <button
          onClick={() => setFilter("all")}
          style={{
            fontWeight: filter === "all" ? "bold" : "normal",
          }}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          style={{
            fontWeight: filter === "active" ? "bold" : "normal",
          }}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          style={{
            fontWeight: filter === "completed" ? "bold" : "normal",
          }}
        >
          Completed
        </button>
      </div>
      <div>
        <button onClick={clearCompleted}>Clear Completed</button>
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
