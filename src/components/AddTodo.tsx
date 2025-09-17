import type React from "react"
import { useState } from "react"

type AddTodoProps = {
    addTodoHandler: (todo: string) => void
}

export default function AddTodo({addTodoHandler}: AddTodoProps) {
    const [todo, setTodo] = useState<string>("")
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTodoHandler(todo)
        setTodo("")
    }

    return (
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={todo} onChange={onChangeHandler}/>
        <button type="submit">登録</button>
      </form>
    )
}