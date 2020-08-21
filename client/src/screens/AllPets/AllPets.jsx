import React, { useEffect, useState } from 'react'

import AnimalCard from '../../components/AnimalCard/AnimcalCard'

import { getPets } from '../../services/pets'

const AllPets = () => {
  const [allPets, setAllPets] = useState([])
  const [queriedPets, setQueriedPets] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      const pets = await getPets()
      setAllPets(pets)
      setQueriedPets(pets)
    }
    fetchPets()
  }, [])

  const petCardsJSX = queriedPets.map((pet, index) => 
    <AnimalCard name={pet._id} key={index}/>
  )

  return (
    <div>
      {petCardsJSX}
    </div>
  )
}

export default AllPets
