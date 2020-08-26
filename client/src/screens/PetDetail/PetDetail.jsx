import React, { useState, useEffect } from "react";
import { getPet, deletePet } from "../../services/pets";
import { useParams } from "react-router-dom";

import Carousel from "../../components/Carousel/Carousel";
import InfoSection from "../../components/InfoSection/InfoSection";
import SecondaryHeaderImage from "../../components/SecondaryHeaderImage/SecondaryHeaderImage";
import EligibilityInformationSection from "../../components/EligibilityInformationSection/EligibilityInformationSection";
import Layout from "../../components/shared/Layout/Layout";

import "./PetDetail.css";

import headerImage from "./screen-shot-2020-07-30-at-2-40-59-pm.png";

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
  }, []);

  if (pet) {
    return (
      <Layout>
        <div>
          <SecondaryHeaderImage image={headerImage} />
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
          <EligibilityInformationSection />
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div>
          <button>Edit</button>
          <button onClick={() => deletePet(pet._id)}>Delete</button>
        </div>
      </Layout>
    );
  }
};

export default PetDetail;
