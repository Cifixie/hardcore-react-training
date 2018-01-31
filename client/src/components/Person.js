import React from "react"

const Person = ({person}) => {
    return (
        <div>
            {person.firstName} {person.lastName} Ikä: {person.age}
        </div>
    )
}

export default Person;