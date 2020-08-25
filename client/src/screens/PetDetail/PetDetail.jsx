import React, { useState, useEffect } from "react";
import { getPet, deletePet } from "../../services/pets";
import { useParams } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";

const PetDetail = () => {
  const [pet, setPet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      const pet = await getPet(id);
      console.log(pet);
      setPet(pet);
    };
    fetchPet();
  }, [id]);

  if (pet) {
    return (
      <Layout>
        <div>
          <h1>{pet.name}</h1>
          <button>Edit</button>
          <button onClick={() => deletePet(pet._id)}>Delete</button>
        </div>
      </Layout>
    );
  } else {
    return <div>loading</div>;
  }
};

export default PetDetail;
