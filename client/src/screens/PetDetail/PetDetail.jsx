import React, { useState, useEffect } from 'react'
import { getPet, deletePet } from '../../services/pets'
import { useParams } from 'react-router-dom'

import Carousel from '../../components/Carousel/Carousel'
import InfoSection from '../../components/InfoSection/InfoSection'

import './PetDetail.css'

const PetDetail = () => {
  const [pet, setPet] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchPet = async () => {
      const pet = await getPet(id)
      console.log(pet)
      setPet(pet)
    }
    fetchPet()
  }, [])

  if (pet) {
  return (
    <div>
      <div className="pet-detail-top-section">
      <Carousel />
      <InfoSection
        name={pet.name}
        age={pet.age}
        sex={pet.sex}
        breed={pet.breed}
        bioPersonality={pet.bioPersonality}
      />
      </div>
      <button>Edit</button>
      <button onClick={() => deletePet(pet._id)}>Delete</button>
    </div>
  )
  } else {
    return (
      <div>
        loading
      </div>
    )
  }
}

export default PetDetail
