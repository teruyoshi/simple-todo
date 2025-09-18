import type { Todo } from "../App"
import TodoItem from "./TodoItem"

type TodoListProps = {
  todos: Todo[]
  changeTodoHandler: (todo: Todo) => void
}

export default function TodoList({ todos, changeTodoHandler }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodoHandler={changeTodoHandler}
        />
      ))}
    </ul>
  )
}
