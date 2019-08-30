import React from 'react'
import { render } from 'react-dom'
import SearchParams from './SearchParams'
import ChangeColor from './ChangeColor'

const App = () => {
  return (
    <div>
      <SearchParams />
      <ChangeColor />
    </div>
  )
}

render(<App />, document.getElementById('root'))
