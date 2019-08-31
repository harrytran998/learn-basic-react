import React from 'react'
import useDropDown from './UseDropDown'

const Animal = ['Dog', 'Cat', 'Pig']

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
  const [petName, PetDropDown] = useDropDown('pet', 'dog', Animal)
  return (
    <div>
      <h1>Hello Pet</h1>
      <PetDropDown />
    </div>
  )
}

export default SearchPet
