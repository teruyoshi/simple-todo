import type React from "react"
import type { Todo } from "../App"

type TodoItemProps = {
  todo: Todo
  changeTodoHandler: (todo: Todo) => void
}

export default function TodoItem({ todo, changeTodoHandler }: TodoItemProps) {
  const onChangeCheckboxHandler = () => {
    const toggledDone = !todo.done
    changeTodoHandler({ ...todo, done: toggledDone })
  }

  const onChangeTextBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value
    changeTodoHandler({ ...todo, text: newText })
  }

  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={onChangeCheckboxHandler}
        />
        <input
          type="text"
          value={todo.text}
          onChange={onChangeTextBoxHandler}
          disabled={todo.done}
        />
      </div>
    </li>
  )
}
