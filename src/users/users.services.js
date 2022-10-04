//! Imports
const usersContollers = require("./users.controllers")

//? Actions
const getUsers = (req, res) => {
    const data = usersContollers.getAllUsers()

    res.status(200).json(data)
}

const getOneUser = (req, res) => {
    const id = req.params.id
    const data = usersContollers.getUserById(id)

    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({ id: id, message: "Invalid ID" })
    }
}

const createNewUser = (req, res) => {
    const data = req.body

    if(data.first_name && data.last_name && data.email.includes("@gmail.com") && data.password.length > 10 && data.birthday){
        const info = usersContollers.createUser(data)

        res.status(201).json(info)
    } else {
        res.status(400).json({message: "Missing Data"})
    }
}

//! Exports
module.exports = {
    getUsers,
    getOneUser,
    createNewUser
}