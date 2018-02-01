import React from "react"
import personService from "../services/person"
import PersonsList from "./PersonList"
import styles from "./App.pcss"

import { List } from "immutable"
import person from "../services/person";

class App extends React.Component {
    state = {
        persons: List()
    }

    firePerson = id => {
        this.setState({
            persons: this.state.persons.filter(p => p.id !== id)
        })
    }

    componentDidMount() {
        personService.getPersons()
            .then(persons => this.setState({persons: List(persons)}))
    }
    render() {
        const { persons } = this.state
        return (
            <div>
                <h1>moi</h1>
                <h1>Good persons</h1>
                <PersonsList persons={persons.filter(p => p.age > 30)} firePerson={this.firePerson}/>
                <h1>better persons</h1>
                <PersonsList persons={persons.filter(p => p.age <= 30)} firePerson={this.firePerson}/>
            </div>
        )
    }

}

export default App;