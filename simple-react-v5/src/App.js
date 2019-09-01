import React from 'react'
import { render } from 'react-dom'
import SearchPet from './SearchPet'
import Details from './Details'
import { Router, Link } from '@reach/router'

const App = () => {
  return (
    <div className="mt-5">
      <Router>
        <SearchPet path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  )
}

render(<App />, document.getElementById('root'))
