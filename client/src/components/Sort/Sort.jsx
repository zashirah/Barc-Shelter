import React from 'react'
import './Sort.css'


const Sort = (props) => {

    const handleChange = (event) => {
        props.onChange(event.target.value)
    }

  return (
    <div className="navbar">
        <div className="dropdown">
        <button className="dropbtn">Sort By   <i className="fa fa-caret-down" aria-hidden="true" onClick={props.handleSubmit}></i></button>
          <div className="dropdown-content" onClick={handleChange}>
                <option className="option" value="age-ascending">&nbsp; Age, (Young to Old) &nbsp;</option>
                <option className="option" value="age-descending">&nbsp; Age, (Old to Young) &nbsp;</option>
                <option className="option" value="shelteredTime-ascending">&nbsp; Sheltered Time, Short to Long &nbsp;</option>
                <option className="option" value="shelteredTime-descending">&nbsp; Sheltered Time, Long to Short &nbsp;</option>
          </div>
            {/* <form className="sort-container" onSubmit={props.handleSubmit}>
            <label htmlFor="sort">SORT BY:</label>
            <select className="sort" onChange={handleChange}>
                <option className="option" value="age-ascending" >&nbsp; Age, (Young to Old) &nbsp;</option>
                <option value="age-descending">&nbsp; Age, (Old to Young) &nbsp;</option>
                <option value="shelteredTime-ascending">&nbsp; Sheltered Time, Short to Long &nbsp;</option>
                <option value="shelteredTime-descending">&nbsp; Sheltered Time, Long to Short &nbsp;</option>
            </select>
        </form> */}
    </div>



    </div>


  )
}

export default Sort