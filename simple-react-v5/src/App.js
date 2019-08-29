import { createElement } from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

const App = () => {
  return createElement('div', { id: 'insert-someAtributes' }, [
    createElement('h1', {}, 'Hello bae'),
    createElement(Pet, { name: 'Fuck', age: 20, breed: 'Alient' }),
    createElement(Pet, { name: 'Fuck', age: 20, breed: 'Alient' }),
    createElement(Pet, { name: 'Fuck', age: 20, breed: 'Alient' })
  ])
}

render(createElement(App), document.getElementById('root'))
