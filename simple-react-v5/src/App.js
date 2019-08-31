import React from 'react'
import { render } from 'react-dom'
// import SearchParams from './SearchParams'
import ChangeColor from './ChangeColor'
import SearchPet from './SearchPet'

const App = () => {
  return (
    <div className="mt-5">
      <h1>Hello</h1>
      <SearchPet />
      <ChangeColor />
    </div>
  )
}

render(<App />, document.getElementById('root'))
