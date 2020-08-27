import React, { useState, useEffect } from "react";
import { getPet, deletePet } from "../../services/pets";
import { useParams, Link } from "react-router-dom";

import Carousel from "../../components/Carousel/Carousel";
import InfoSection from "../../components/InfoSection/InfoSection";
import SecondaryHeaderImage from "../../components/SecondaryHeaderImage/SecondaryHeaderImage";
import EligibilityInformationSection from "../../components/EligibilityInformationSection/EligibilityInformationSection";
import Layout from "../../components/shared/Layout/Layout";

import "./PetDetail.css";

import headerImage from "./screen-shot-2020-07-30-at-2-40-59-pm.png";


const PetDetail = () => {  
  const [pet, setPet] = useState(null);
  const { id, type } = useParams();

  const BreadcrumbsJSX = (
    <div className="breadcrumbs-div">
      <Link to="/adopt" className="breadcrumbs-adoption-link">
        Adoption
      </Link>

      <i className="fa fa-caret-right" aria-hidden="true"></i>
      <Link className="breadcrumbs-pettype-link" to={`/pets/${type}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}s
      </Link>
    </div>
  );

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
          <SecondaryHeaderImage
            image={headerImage}
            name={pet.name}
            breadcrumbs={BreadcrumbsJSX}
          />
          <div className="pet-detail-top-section">
            <Carousel petImages={pet.images} />
            <InfoSection
              name={pet.name}
              age={pet.age}
              sex={pet.sex}
              breed={pet.breed}
              bioPersonality={pet.bioPersonality}
            />
          </div>
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
