import React from 'react'
import './Sort.css'

const Sort = (props) => {

    const handleChange = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <form className="sort-container" onSubmit={props.handleSubmit}>
            <label htmlFor="sort">SORT BY:</label>
            <select className="sort" onChange={handleChange}>
                <option className="option" value="age-ascending" >&nbsp; Age, (Young to Old) &nbsp;</option>
                <option value="age-descending">&nbsp; Age, (Old to Young) &nbsp;</option>
                <option value="shelteredTime-ascending">&nbsp; Sheltered Time, Short to Long &nbsp;</option>
                <option value="shelteredTime-descending">&nbsp; Sheltered Time, Long to Short &nbsp;</option>
            </select>
        </form>
    )
}

export default Sort