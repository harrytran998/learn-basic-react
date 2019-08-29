const App = () => {
  return React.createElement('div', { id: 'insert-someAtributes' }, [
    React.createElement('h1', {}, 'Hello bae'),
    React.createElement('h1', {}, 'Hello bae')
  ])
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))
