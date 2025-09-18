import { useState } from "react"
import "./App.css"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import SelectFilter from "./components/SelectFilter"

export type Todo = {
  readonly id: number
  text: string
  done: boolean
  removed: boolean
}

export const FilterList = [
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

export type FilterIndex = Exclude<keyof typeof FilterList, keyof []>

function App() {
  const [selectedFilter, setSelectedFilter] = useState<FilterIndex>("0")
  const [todos, setTodos] = useState<Todo[]>([])
  const idMax =
    todos.length !== 0 ? Math.max(...todos?.map((todo) => todo.id)) : 0
  const nextId = idMax + 1

  const selectFilterHandler = (index: FilterIndex) => {
    setSelectedFilter(index)
  }

  const addTodoHandler = (todo: string) => {
    if (todo === "") {
      return
    }
    const prevTodos = todos?.slice()
    const newTodo = { id: nextId, text: todo, done: false, removed: false }
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

  const deleteTodoHandler = () => {
    const prevTodos = todos?.slice()
    const newTodos = prevTodos.filter((prevTodo) => !prevTodo.removed)
    console.log(newTodos)
    setTodos(newTodos)
  }

  return (
    <div className="wrapper">
      <div className="header">
        <SelectFilter
          selectedFilter={selectedFilter}
          selectFilterHandler={selectFilterHandler}
        />
        {FilterList[selectedFilter].text === "ごみ箱" && (
          <button type="button" onClick={() => deleteTodoHandler()}>
            ごみ箱を空にする
          </button>
        )}
      </div>
      {(FilterList[selectedFilter].text === "すべてのタスク" ||
        FilterList[selectedFilter].text === "現在のタスク") && (
        <AddTodo addTodoHandler={addTodoHandler} />
      )}
      <TodoList
        todos={todos}
        filterCallback={FilterList[selectedFilter].callBack}
        changeTodoHandler={changeTodoHandler}
      />
    </div>
  )
}

export default App
