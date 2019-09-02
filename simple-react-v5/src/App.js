import React, { useState } from 'react'
import { render } from 'react-dom'
import SearchPet from './SearchPet'
import Details from './Details'
import { Router, Link } from '@reach/router'
import ThemeContext from './ThemeContext'

const App = () => {
  const theme = useState('#C2185B')
  return (
    <ThemeContext.Provider value={theme}>
      <div className="mt-5">
        <Router>
          <SearchPet path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

render(<App />, document.getElementById('root'))
