import React from 'react'
import { render } from 'react-dom'
import SearchPet from './SearchPet'

const App = () => {
  return (
    <div className="mt-5">
      <h1>Hello</h1>
      <SearchPet />
    </div>
  )
}

render(<App />, document.getElementById('root'))
