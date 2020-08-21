import React, { useState } from 'react'
import { wrap } from "@popmotion/popcorn";

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
        display: 'flex'
      }}
    >
      <div
        style={{
          height: 400,
          width: 400,
          backgroundColor: COLORS[index]
        }}
      />
      <div>

      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: COLORS[index1]
        }}
      />
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: COLORS[index2]
        }}
      />
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: COLORS[index3]
        }}
      />
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: COLORS[index4]
        }}
      />

      </div>
      <div>
        <button onClick={() => paginate(-1)}>Left</button>  
        <button onClick={() => paginate(1)}>Right</button>  
      </div>


    </div>
  )
}

export default Carousel
