import type { Todo } from "../App"
import TodoItem from "./TodoItem"

type TodoListProps = {
  todos: Todo[]
  filterCallback: (todo: Todo) => boolean
  changeTodoHandler: (todo: Todo) => void
}

export default function TodoList({
  todos,
  filterCallback,
  changeTodoHandler,
}: TodoListProps) {
  return (
    <ul>
      {todos.filter(filterCallback).map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodoHandler={changeTodoHandler}
        />
      ))}
    </ul>
  )
}
