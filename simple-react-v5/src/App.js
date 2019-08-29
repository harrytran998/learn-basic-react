const Pet = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Chihuahua'),
    React.createElement('h2', {}, 'Chihuahua'),
    React.createElement('h3', {}, 'Chihuahua')
  ])
}

const App = () => {
  return React.createElement('div', { id: 'insert-someAtributes' }, [
    React.createElement('h1', {}, 'Hello bae'),
    React.createElement('h1', {}, 'Hello bae'),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet)
  ])
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))
