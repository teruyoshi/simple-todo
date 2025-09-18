import { useState } from "react"

type TodoItemProps = {
  todo: string
}

export default function TodoItem({ todo }: TodoItemProps) {
  const [checked, setCheck] = useState<boolean>(false)

  const onClickHandler = () => {
    setCheck((checked: boolean) => !checked)
  }

  return (
    <li>
      <input type="checkbox" checked={checked} onClick={onClickHandler} />
      {todo}
    </li>
  )
}
