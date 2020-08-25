import React, { useEffect, useState } from "react";

import AnimalCard from "../../components/AnimalCard/AnimcalCard";

import { getPets } from "../../services/pets";

import "../../components/shared/Layout/Layout";
import Layout from "../../components/shared/Layout/Layout";

const AllPets = () => {
  const [allPets, setAllPets] = useState([]);
  const [queriedPets, setQueriedPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const pets = await getPets();
      setAllPets(pets);
      setQueriedPets(pets);
    };
    fetchPets();
  }, []);

  const petCardsJSX = queriedPets.map((pet, index) => (
    <AnimalCard name={pet.name} key={index} />
  ));

  return (
    <Layout>
      {" "}
      <div>{petCardsJSX}</div>
    </Layout>
  );
};

export default AllPets;
