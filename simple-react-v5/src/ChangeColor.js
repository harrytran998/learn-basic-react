import React, { useState } from 'react'

// prettier-ignore
const getColorRandom = () => '#' + Math.random().toString(16).substr(-6)

const ChangeColor = () => {
  /**
   * Chú ý: React Hook k được để ở trong 1 condition nào đó
   */
  const [color, setColor] = useState(getColorRandom())
  return (
    <div>
      <h1 style={{ color }}>This color {color}</h1>
      <button onClick={() => setColor(getColorRandom())}></button>
    </div>
  )
}

export default ChangeColor
