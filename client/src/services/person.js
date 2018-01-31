import faker from "faker"
import r from "../utils/random"
import uuid from "uuid"

const createPerson = () => {
    return {
        id: uuid(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        age: r.integer(13, 80),
        gender: r.pick(["m", "f"]),
        email: faker.internet.email()
    }
}

export default {
    createPerson
}