import { useState } from "react";
import type { Todo } from "./../types/todo";

function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (title: string) => {
    if (!title.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
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
  return { todos, addTodo, deleteTodo, toggleTodo };
}

export default useTodos;
