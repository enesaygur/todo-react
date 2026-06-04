import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import useTodos from "./hooks/useTodos";
import TodoFilters from "./components/TodoFilters";
import TodoStats from "./components/TodoStats";

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
  const remainingTodos = todos.filter((todo) => !todo.completed).length;
  return (
    <>
      <div>
        <TodoFilters filter={filter} setFilter={setFilter} />
        <TodoStats remainingTodos={remainingTodos} />
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
