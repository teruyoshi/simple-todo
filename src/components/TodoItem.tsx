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

  const onClickDeleteButtonHandler = () => {
    const toggledRemoved = !todo.removed
    changeTodoHandler({ ...todo, removed: toggledRemoved })
  }

  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={onChangeCheckboxHandler}
          disabled={todo.removed}
        />
        <input
          type="text"
          value={todo.text}
          onChange={onChangeTextBoxHandler}
          disabled={todo.removed || todo.done}
        />
        <button type="button" onClick={onClickDeleteButtonHandler}>
          {todo.removed ? "復元" : "削除"}
        </button>
      </div>
    </li>
  )
}
