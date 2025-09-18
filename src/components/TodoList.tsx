import TodoItem from "./TodoItem"

type TodoListProps = {
  todos: string[]
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={`${todo}${index}`} todo={todo} />
      ))}
    </ul>
  )
}
