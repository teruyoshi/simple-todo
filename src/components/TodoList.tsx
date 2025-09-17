type TodoListProps = {
    todos: string[]
}

export default function TodoList({todos}: TodoListProps) {
    return (
      <ul>
        {todos.map((todo, index) => (<li key={`${todo}${index}`}>{todo}</li>))}
      </ul>
    )
}