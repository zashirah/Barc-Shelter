// Built from the example code at https://github.com/GKTechy/reactjs_pagination/blob/master/src/PaginationExample.js
import React, { useState,useEffect } from 'react'
import './PageNavigation.css'

import ReactPaginate from 'react-paginate'
import { render } from 'react-dom'
import AnimalCard from '../../components/AnimalCard/AnimalCard'

const PageNavigation = ({pets}) => {
  // console.log("line")
  // console.log(pets)
  const [offset, updateOffset] = useState(0)
  const [tableData, updateTableData] = useState([])
  const [orgtableData, updateOrgTableData] = useState([])
  const [perPage, updatePerPage] = useState(6)
  const [currentpage, updateCurrentPage] = useState(0)
  const [pageCount, updatePageCount] = useState()

  
  
  // useEffect(() => {
    
  //   console.log("lne 20")
  //   console.log(pets)
  //   const slice = pets.slice(offset, offset + perPage)
  //   const petCardsJSX = slice.map((pet, index) =>
  //   <AnimalCard
  //     name={pet.name}
  //     age={pet.age}
  //     images={pet.images[0]}
  //     key={index}
  //   />
  //   )
  //   updateTableData(petCardsJSX)
  //   updatePageCount(Math.ceil(pets.length/perPage))
  // }, [pets,offset])



  
  // const handlePageClick = (e) => {
  //   const selectedPage = e.selected
  //   const offset = selectedPage * perPage
  //   updateCurrentPage(selectedPage)
  //   updateOffset(offset)
  // }

  
 

  return (
    <div>
      <div>
        {tableData}
      </div>
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


    </div>




)
}
export default PageNavigation