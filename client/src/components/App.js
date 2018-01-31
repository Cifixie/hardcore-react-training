import React from "react"
import personService from "../services/person"
import Person from "./Person"
import person from "../services/person";

const persons = Array.from(Array(50), personService.createPerson);

const App = props => {
    return (
        <div>
            <h1>moi</h1>
            {persons.map(p => <Person key={person.id} person={p}/>)}
        </div>
    )
}

export default App;