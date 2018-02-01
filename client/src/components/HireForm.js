import React from "react"

import personService from "../services/person"


class App extends React.Component {
    state = {
        firstName: 'etunimi',
        lastName: 'sukunimi'
    }
    handleSubmit = () => {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="firstName" onChange={(e) => this.setState({firstName: e.target.value})} value={this.state.firstName} />
                <input name="lastName" onChange={(e) => this.setState({lastName: e.target.value})} value={this.state.lastName} />
                <button>Tallenna</button>
            </form>
        )
    }

}

export default App;