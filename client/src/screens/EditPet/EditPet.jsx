import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPet, updatePet } from "../../services/pets";
import Layout from "../../components/shared/Layout/Layout";

const EditPet = () => {
  const [pet, setPet] = useState({
    name: "",
  });

  let { id } = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      const pet = await getPet(id);
      setPet(pet);
    };
    fetchPet();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPet({
      ...pet,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updatePet(id, pet);
  };

  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            value={pet.name}
            name="name"
            autoFocus
            placeholder="Name"
            onChange={handleChange}
          />
          <label htmlFor="submitButton"></label>
          <input
            type="submit"
            value="submit"
            name="submitButton"
            id="submitButton"
          />
        </form>
      </div>
    </Layout>
  );
};

export default EditPet;
