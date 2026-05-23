import type React from "react";

type Props = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
};

function TodoInput({ title, setTitle, addTodo }: Props) {
  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodo();
        }}
        placeholder="Todo yaz..."
      />
    </>
  );
}

export default TodoInput;
