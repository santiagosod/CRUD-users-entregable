//! Imports
const router = require("express").Router()

const usersServices = require("./users.services")

//? Actions
router.get("/users", usersServices.getUsers)

router.post("/users", usersServices.createNewUser)

router.get("/users/:id", usersServices.getOneUser)

//! Exports
module.exports = router