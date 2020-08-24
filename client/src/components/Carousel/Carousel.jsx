import React, { useState } from 'react'
import { wrap } from "@popmotion/popcorn";
import leftChevron from './chevron-left.png'
import rightChevron from './chevron-right.png'

const COLORS = [
  'red',
  'green',
  'blue',
  'purple',
  'black',
  'pink'
]

const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0])
  
  const paginate = (direction) => {
    setPage([page + direction, direction])
  }

  const index = wrap(0, COLORS.length, page)
  const index1 = wrap(0, COLORS.length, page+1)
  const index2 = wrap(0, COLORS.length, page+2)
  const index3 = wrap(0, COLORS.length, page+3)
  const index4 = wrap(0, COLORS.length, page+4)
  

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <button
        onClick={() => paginate(-1)}
        style={{
          backgroundColor: 'white',
          border: 'none',
          color: 'none',
          height: 100,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img src={leftChevron} alt="left button click"/>
      </button> 
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            height: 400,
            width: 400,
            backgroundColor: COLORS[index],
            marginBottom: 2.5
          }}
        />
        <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: 400,
          justifyContent: 'space-between'
          }}
        >

        <div
          style={{
            height: 97.5,
            width: 97.5,
            backgroundColor: COLORS[index1]
          }}
        />
        <div
          style={{
            height: 97.5,
            width: 97.5,
            backgroundColor: COLORS[index2]
          }}
        />
        <div
          style={{
            height: 97.5,
            width: 97.5,
            backgroundColor: COLORS[index3]
          }}
        />
        <div
          style={{
            height: 97.5,
            width: 97.5,
            backgroundColor: COLORS[index4]
          }}
        />
        </div>
      </div>
      <button
        onClick={() => paginate(1)}
        style={{
          backgroundColor: 'white',
          border: 'none',
          color: 'none',
          height: 100,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <img src={rightChevron} alt="right button click"/>
      </button>  
    </div>
  )
}

export default Carousel
