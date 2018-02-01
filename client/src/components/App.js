import React from "react"
import { List } from "immutable"

import personService from "../services/person"
import PersonsList from "./PersonList"
import HireForm from "./HireForm"
import styles from "./App.pcss"


class App extends React.Component {
    state = {
        persons: List()
    }

    firePerson = id => {
        this.setState({
            persons: this.state.persons.filter(p => p.id !== id)
        })
    }

    hirePerson = person => {
        this.setState({
            persons: this.state.persons.push(person)
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
                <HireForm hirePerson={this.hirePerson}/>
                <h2>Good persons</h2>
                <PersonsList persons={persons.filter(p => p.age > 30)} firePerson={this.firePerson}/>
                <h2>better persons</h2>
                <PersonsList persons={persons.filter(p => p.age <= 30)} firePerson={this.firePerson}/>
            </div>
        )
    }

}

export default App;