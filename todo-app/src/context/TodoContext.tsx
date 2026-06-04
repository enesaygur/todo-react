import React, { createContext, useContext } from "react";
import useTodos from "../hooks/useTodos";

const TodoContext = createContext<ReturnType<typeof useTodos> | undefined>(
  undefined,
);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const todoData = useTodos();
  return (
    <TodoContext.Provider value={todoData}>{children}</TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
}
