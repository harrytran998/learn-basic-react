import React, { useState } from 'react'

const useDropDown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState)
  const id = `use-dropdown-${label.replace(' ').toUpperCase()}`
  // prettier-ignore
  const DropDown = () => {
    return <label htmlFor={id}>
      {label}
      <select id={id} value={state} className="pl-4 ml-4"
        onChange={e => setState(e.target.value)} 
        onBlur={e => setState(e.target.value)} 
        disabled={!options.length}
      >
        <option>All Pet</option>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  }
  return [state, DropDown, setState]
}

export default useDropDown
