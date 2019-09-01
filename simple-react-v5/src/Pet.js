import React from 'react'
import { Link } from '@reach/router'

const Pet = props => {
  const { name, animal, breed, media, location, id } = props

  let hero = 'http://placecorgi.com/300/300'
  if (media.length) {
    hero = media[0].small
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="d-flex justify-content-between py-3">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info d-flex justify-content-between">
          <h1 className="d-flex justify-center align-items-center">{name}</h1>
          <h2 className="d-flex justify-center align-items-center">{`${animal.toUpperCase()} — ${breed} — ${location}`}</h2>
        </div>
      </div>
    </Link>
  )
}

export default Pet
