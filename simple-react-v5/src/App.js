import React from 'react'
import { render } from 'react-dom'
// import SearchParams from './SearchParams'
import ChangeColor from './ChangeColor'
import SearchPet from './SearchPet'

const App = () => {
  return (
    <div>
      <SearchPet />
      <ChangeColor />
    </div>
  )
}

render(<App />, document.getElementById('root'))
