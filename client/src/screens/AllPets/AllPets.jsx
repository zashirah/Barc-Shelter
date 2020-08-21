import React, { useEffect, useState } from 'react'

import AnimalCard from '../../components/AnimalCard/AnimcalCard'

import { getPets } from '../../services/pets'

const AllPets = () => {
  const [allPets, setAllPets] = useState([])
  const [queriedPets, setQueriedPets] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      const pets = await getPets()
      console.log(pets)
      setAllPets(pets)
      setQueriedPets(pets)
    }
    fetchPets()
  }, [])

  const petCardsJSX = queriedPets.map((pet, index) => 
    <AnimalCard name={pet.name}/>
  )

  return (
    <div>
      {petCardsJSX}
    </div>
  )
}

export default AllPets
