import React, { useEffect, useState } from 'react'
import './AllPets.css'

import AnimalCard from '../../components/AnimalCard/AnimalCard'

import { YO, OY, shelterLongest, shelterYoungest } from '../../utils/sort'
import Sort from '../../components/Sort/Sort'
import Layout from '../../components/shared/Layout/Layout'
import { getPets } from '../../services/pets'




const AllPets = () => {
  const [allPets, setAllPets] = useState([])
  const [queriedPets, setQueriedPets] = useState([])
  const [sortType, setSortType] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      const pets = await getPets()
      setAllPets(pets)
      setQueriedPets(pets)
    }
    fetchPets()
  }, [])

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "age-ascending":
        setQueriedPets(YO(queriedPets))
        break
      case "age-descending":
        setQueriedPets(OY(queriedPets))
        break
      case "shelteredTime-ascending":
        setQueriedPets(shelterYoungest(queriedPets))
        break
      case "shelteredTime-descending":
        setQueriedPets(shelterLongest(queriedPets))
        break
      default:
        break
    }
  }



  const petCardsJSX = queriedPets.map((pet, index) =>
    <AnimalCard
      name={pet.name}
      age={pet.age}
      images={pet.images[0]}
      key={index}
    />
  )

//add layout component
  return (
    <div>
      <Sort onChange={handleSort} />
      <div className='pets'>
        {petCardsJSX}
      </div>
    </div>

  )
}

export default AllPets
