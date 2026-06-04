interface Props {
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
}
function TodoFilters({ filter, setFilter }: Props) {
  return (
    <>
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
    </>
  );
}
export default TodoFilters;
