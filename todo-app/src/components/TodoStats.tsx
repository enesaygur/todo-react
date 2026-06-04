interface Props {
  remainingTodos: number;
}
function TodoStats({ remainingTodos }: Props) {
  return <p>{remainingTodos} tasks left</p>;
}
export default TodoStats;
