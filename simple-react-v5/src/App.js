const Pet = ({ name, age, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, age),
    React.createElement('h3', {}, breed)
  ])
}

const App = () => {
  return React.createElement('div', { id: 'insert-someAtributes' }, [
    React.createElement('h1', {}, 'Hello bae'),
    React.createElement(Pet, { name: 'Fuck', age: 20, breed: 'Alient' }),
    React.createElement(Pet, { name: 'Fuck', age: 20, breed: 'Alient' }),
    React.createElement(Pet, { name: 'Fuck', age: 20, breed: 'Alient' })
  ])
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))
