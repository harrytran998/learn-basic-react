import React, { useEffect, useState } from 'react'
import useDropDown from './UseDropDown'
import pet, { ANIMALS } from '@frontendmasters/pet'

const SearchPet = () => {
  const [location, setLocation] = useState('Seattle, WA')
  const [breeds, setBreeds] = useState([])
  const [breed, BreedDropDown, setBreed] = useDropDown('breed', '', breeds)
  const [petName, PetDropDown] = useDropDown('pet', 'dog', ANIMALS)
  useEffect(() => {
    setBreeds([])
    setBreed('')
    pet
      .breeds(petName)
      .then(({ breeds }) => {
        setBreeds(breeds.map(({ name }) => name))
      })
      .catch(err => console.log(err))
  }, [petName])
  return (
    <div>
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location
            <input className="ml-4" id="location" value={location} placeholder="Location" onChange={e => setLocation(e.target.value)} />
          </label>
          <br></br>
          <PetDropDown />
          <br></br>
          <BreedDropDown />
          <br></br>
          <button className="btn btn-lg btn-primary my-4">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SearchPet
