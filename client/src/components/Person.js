import React from "react"
import styles from "./Person.pcss"
import cx from "classnames"
import Button from "./Button"

const Person = ({person, firePerson}) => {
    const classes = cx(
        styles.root,
        {
            [styles.male]: person.gender === "m",
            [styles.female]: person.gender === "f",
        }
    )
    return (
        <div className={classes}>
            {person.firstName} {person.lastName} Ikä: {person.age}
            <Button block onClick={() => firePerson(person.id)}>Vapauta</Button>
        </div>
    )
}

export default Person;