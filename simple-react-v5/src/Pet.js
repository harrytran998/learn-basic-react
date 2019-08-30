import React from 'react'

export default function Pet({ name, age, breed }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{breed}</h1>
    </div>
  )
}
