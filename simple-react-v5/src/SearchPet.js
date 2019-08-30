import React from 'react'
import useDropDown from './UseDropDown'

const Pet = [
  {
    petName: 'A',
    petAge: 1
  },
  {
    petName: 'B',
    petAge: 1
  },
  {
    petName: 'C',
    petAge: 1
  }
]

const SearchPet = () => {
  // eslint-disable-next-line no-unused-vars
  const [petName, PetDropDown] = useDropDown('pet', 'dog', Pet)
  return (
    <div>
      <h1>Hello Pet</h1>
      <PetDropDown />
    </div>
  )
}

export default SearchPet
