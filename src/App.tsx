import { useState } from "react"
import "./App.css"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

export type Todo = {
  id: number
  text: string
  done: boolean
  removed: boolean
}

function App() {
  const [nextId, setNextId] = useState<number>(1)
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todo: string) => {
    const prevTodos = todos?.slice()
    const newTodo = { id: nextId, text: todo, done: false, removed: false }
    setNextId((prevNextId) => prevNextId + 1)
    const newTodos = [newTodo, ...prevTodos]
    setTodos(newTodos)
  }

  const changeTodoHandler = (todo: Todo) => {
    const prevTodos = todos?.slice()
    const newTodos = prevTodos.map((prevTodo) => {
      if (prevTodo.id === todo.id) {
        return todo
      }
      return prevTodo
    })
    setTodos(newTodos)
  }

  return (
    <>
      <AddTodo addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} changeTodoHandler={changeTodoHandler} />
    </>
  )
}

export default App
