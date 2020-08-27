import React from 'react'
import './Sort.css'


const Sort = (props) => {

    const handleChange = (event) => {
        props.onChange(event.target.value)
    }

  return (
    <div>
        <div className="dropdowna">
        <button className="dropbtna">Sort   <i className="fa fa-caret-down" aria-hidden="true" onClick={props.handleSubmit}></i></button>
          <div className="dropdown-contenta" onClick={handleChange}>
                <option className="optin" value="age-ascending">&nbsp; Age, (Young to Old) &nbsp;</option>
                <option className="optin" value="age-descending">&nbsp; Age, (Old to Young) &nbsp;</option>
                {/* <option className="option" value="shelteredTime-ascending">&nbsp; Sheltered Time, Short to Long &nbsp;</option>
                <option className="option" value="shelteredTime-descending">&nbsp; Sheltered Time, Long to Short &nbsp;</option> */}
          </div>
    </div>
    </div>


  )
}

export default Sort