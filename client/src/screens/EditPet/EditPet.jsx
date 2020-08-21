import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getPet, updatePet } from '../../services/pets'

const EditPet = () => {
  const [pet, setPet] = useState({
    name: ""
  })

  let { id } = useParams()

  useEffect(() => {
    const fetchPet = async () => {
      const pet = await getPet(id)
      setPet(pet)
    }
    fetchPet()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setPet({
      ...pet,
      [name]: value
    })
  }


  return (
    <div>
      <form>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          value={pet.name}
          name='name'
          autoFocus
          placeholder='Name'
          onChange={(e) => handleChange(e)}
        />


      </form>
      
    </div>
  )
}

export default EditPet
