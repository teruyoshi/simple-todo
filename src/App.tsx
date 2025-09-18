import { useState } from "react"
import "./App.css"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

export type Todo = {
  readonly id: number
  text: string
  done: boolean
  removed: boolean
}

function App() {
  const FilterList = [
    { text: "すべてのタスク", callBack: (todo: Todo) => !todo.removed },
    {
      text: "完了したタスク",
      callBack: (todo: Todo) => !todo.removed && todo.done,
    },
    {
      text: "現在のタスク",
      callBack: (todo: Todo) => !todo.removed && !todo.done,
    },
    { text: "ごみ箱", callBack: (todo: Todo) => todo.removed },
  ] as const

  type FilterIndex = Exclude<keyof typeof FilterList, keyof []>

  const [selectedFilter, setSelectedFilter] = useState<FilterIndex>("0")
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
      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value as FilterIndex)}
      >
        {FilterList.map((filterText, index) => (
          <option key={filterText.text} value={index}>
            {filterText.text}
          </option>
        ))}
      </select>
      <AddTodo addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        filterCallback={FilterList[selectedFilter].callBack}
        changeTodoHandler={changeTodoHandler}
      />
    </>
  )
}

export default App
