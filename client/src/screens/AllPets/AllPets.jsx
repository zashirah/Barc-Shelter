import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import "./AllPets.css";

import AnimalCard from "../../components/AnimalCard/AnimalCard";

import { YO, OY, shelterLongest, shelterYoungest } from "../../utils/sort";
import Sort from "../../components/Sort/Sort";
import Layout from "../../components/shared/Layout/Layout";
import { getPets } from "../../services/pets";
// import PageNavigation from '../../components/PageNavigation/PageNavigation'
import ReactPaginate from "react-paginate";


import SecondaryHeaderImage from "../../components/SecondaryHeaderImage/SecondaryHeaderImage"

import headerImage from "./cat-picture.png"


const AllPets = () => {
  const [allPets, setAllPets] = useState([]);
  const [queriedPets, setQueriedPets] = useState([]);
  const [sortType, setSortType] = useState([]);
  const [offset, updateOffset] = useState(0);
  const [tableData, updateTableData] = useState([]);
  const [orgtableData, updateOrgTableData] = useState([]);
  const [perPage, updatePerPage] = useState(6);
  const [currentpage, updateCurrentPage] = useState(0);
  const [pageCount, updatePageCount] = useState();

  const params = useParams()

  useEffect(() => {
    const fetchPets = async () => {
      const pets = await getPets();

      const petType = pets.filter((pet) => pet.type === params.type);
      setAllPets(petType);
      setQueriedPets(petType);
      if (petType) {
        console.log(petType);
        const slice = petType.slice(offset, offset + perPage);
        if (slice) {
          console.log(slice);
          const petCardsJSX = slice.map((pet, index) => (
            <AnimalCard
              name={pet.name}
              age={pet.age}
              images={pet.images[0]}
              key={index}
            />
          ));
          updateTableData(petCardsJSX);
          updatePageCount(Math.ceil(queriedPets.length / perPage));
        }
      }
    };
    fetchPets();
  }, [offset, sortType]);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "age-ascending":
        setQueriedPets(YO(queriedPets));
        break;
      case "age-descending":
        setQueriedPets(OY(queriedPets));
        break;
      case "shelteredTime-ascending":
        setQueriedPets(shelterYoungest(queriedPets));
        break;
      case "shelteredTime-descending":
        setQueriedPets(shelterLongest(queriedPets));
        break;
      default:
        break;
    }
  };

  // useEffect(() => {
  //   const slice = queriedPets.slice(offset, offset + perPage);
  //   const petCardsJSX = slice.map((pet, index) => (
  //     <AnimalCard
  //       name={pet.name}
  //       age={pet.age}
  //       images={pet.images[0]}
  //       key={index}
  //     />
  //   ));
  //   updateTableData(petCardsJSX);
  //   updatePageCount(Math.ceil(queriedPets.length / perPage));
  // }, [queriedPets, offset, sortType]);

  // const petCardsJSX = queriedPets.map((pet, index) =>
  //   <AnimalCard
  //     name={pet.name}
  //     age={pet.age}
  //     images={pet.images[0]}
  //     key={index}
  //   />
  // )
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    updateCurrentPage(selectedPage);
    updateOffset(offset);
  };

  //add layout component
  return (
    <Layout>
      <SecondaryHeaderImage image={headerImage} />
      <div className="big-box">
        <div className="sort">
          <Sort onChange={handleSort} />
        </div>

        <div className="pets">{tableData}</div>
        <div className="pagination">
          {/* <div>
        {tableData}
      </div> */}
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={6}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
          {/* <PageNavigation
      pets={queriedPets}
    /> */}
        </div>
      </div>

      {/* <div className="pets">{petCardsJSX}</div> */}
    </Layout>
  );
};

export default AllPets;
