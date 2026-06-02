import { useEffect, useReducer, useState } from "react";
import type { Todo } from "./../types/todo";
import { todoReducer } from "../reducers/todoReducer";

type Filter = "all" | "active" | "completed";
function useTodos() {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const addTodo = (title: string) => {
    if (!title.trim()) return;

    dispatch({ type: "ADD_TODO", payload: title });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const editTodo = (id: number, title: string) => {
    dispatch({ type: "EDIT_TODO", payload: { id, title } });
  };

  const toggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos: filteredTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    filter,
    setFilter,
    editTodo,
    clearCompleted,
  };
}

export default useTodos;
