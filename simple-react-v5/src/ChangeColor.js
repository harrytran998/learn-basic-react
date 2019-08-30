import React, { useState } from 'react'

const getColorRandom = () =>
  '#' +
  Math.random()
    .toString(16)
    .substr(-6)

const ChangeColor = () => {
  const [color, setColor] = useState(getColorRandom())
  return (
    <div>
      <h1 style={{ color }}>This color {color}</h1>
      <button onClick={() => setColor(getColorRandom())}></button>
    </div>
  )
}

export default ChangeColor
