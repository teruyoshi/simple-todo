import { useState } from "react"
import "./App.css"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState<string[]>([])

  const addTodoHandler = (todo: string) => {
    const prevTodos = todos?.slice()
    const newTodos = [todo, ...prevTodos]
    setTodos(newTodos)
  }

  return (
    <>
      <AddTodo addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
