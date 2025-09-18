import type React from "react"
import { FilterList, type FilterIndex } from "../App"

type SelectFilterProps = {
  selectedFilter: FilterIndex
  selectFilterHandler: (index: FilterIndex) => void
}

export default function SelectFilter({
  selectedFilter,
  selectFilterHandler,
}: SelectFilterProps) {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectFilterHandler(e.target.value as FilterIndex)
  }

  return (
    <select value={selectedFilter} onChange={onChangeHandler}>
      {FilterList.map((filterText, index) => (
        <option key={filterText.text} value={index}>
          {filterText.text}
        </option>
      ))}
    </select>
  )
}
