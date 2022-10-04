//! Imports
const uuid = require("uuid")

//* Fake data base
const userDB = [{
    id: "b4b258cd-d0b0-443e-8ad7-bfb8719526c7",
    first_name: "Daniel",
    last_name: "Ospina",
    email: "poised691@gmail.com",
    password: "1234567890",
    birthday: "2002/12/28"
},{
    id: "f2060244-1538-449a-be6a-dcabe6782b0c",
    first_name: "Juan",
    last_name: "Alberto",
    email: "j.alberto@gmail.com",
    password:"7jdi29sje",
    birthday: "1990/02/20"
}]

//? Actions
const getAllUsers = () => {
    return userDB
}

const getUserById = id => {
    const data = userDB.find(user => user.id === id)

    return data
}

const createUser = data => {
    const newUser = {
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }

    userDB.push(newUser)
    return newUser
}

//! Exports
module.exports = {
    getAllUsers,
    getUserById,
    createUser
}