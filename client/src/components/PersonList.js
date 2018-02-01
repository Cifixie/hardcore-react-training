import React from "react"
import PropTypes from "prop-types"
import Person from "./Person"

const PersonList = props => {
    const {persons, ...rest } = props;

    const a = persons.reduce((sum, p) => sum + p.age, 0) / persons.count();
    return (
        <div>
            <p>{a.toFixed(2)}</p>
            {persons.map(p => <Person {...rest} key={p.id} person={p}/>)}
        </div>
    )
}

PersonList.propTypes = {
    persons: PropTypes.array.isRequired
}
export default PersonList;