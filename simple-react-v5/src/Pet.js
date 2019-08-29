import { createElement } from 'react'
export default function Pet({ name, age, breed }) {
  return createElement('div', {}, [
    createElement('h1', {}, name),
    createElement('h2', {}, age),
    createElement('h3', {}, breed)
  ])
}
