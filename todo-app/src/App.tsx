import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import TodoFilters from "./components/TodoFilters";
import TodoStats from "./components/TodoStats";
import { useTodoContext } from "./context/TodoContext";

function App() {
  const [title, setTitle] = useState("");
  const { addTodo, clearCompleted } = useTodoContext();
  const handleAddTodo = () => {
    addTodo(title);
    setTitle("");
  };

  return (
    <>
      <div>
        <TodoFilters />
        <TodoStats />
      </div>
      <div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
      <h1>Todo App</h1>
      <TodoInput title={title} setTitle={setTitle} addTodo={handleAddTodo} />
      <TodoList />
    </>
  );
}

export default App;
