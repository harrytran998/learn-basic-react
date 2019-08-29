import { createElement } from 'react'
import { render } from 'react-dom'

const Pet = ({ name, age, breed }) => {
  return createElement('div', {}, [
    createElement('h1', {}, name),
    createElement('h2', {}, age),
    createElement('h3', {}, breed)
  ])
}

const App = () => {
  return createElement('div', { id: 'insert-someAtributes' }, [
    createElement('h1', {}, 'Hello bae'),
    createElement(Pet, { name: 'Fuck', age: 20, breed: 'Alient' }),
    createElement(Pet, { name: 'Fuck', age: 20, breed: 'Alient' }),
    createElement(Pet, { name: 'Fuck', age: 20, breed: 'Alient' })
  ])
}

render(createElement(App), document.getElementById('root'))
