import React, { useState } from 'react'

const SearchParams = () => {
  const [girl, setGirl] = useState('Thanh Nhan')
  return (
    <div>
      <h1>Hello bae, {girl}</h1>
      <input onChange={e => setGirl(e.target.value)} placeholder={girl}></input>
    </div>
  )
}

export default SearchParams
