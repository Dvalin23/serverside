const express = require('express')
const Routes = express.Router()

const {CreateUser, Deleteuser, GetAllUsers, GetSingleUser ,UpdateUser } = require("../controller/Usercontroller")


Routes.post("/new-user", CreateUser)
Routes.get("/all-users", GetAllUsers)
Routes.get("/get-one-user/:id", GetSingleUser) 
Routes.patch("/update-users/:id", UpdateUser)
Routes.delete("/delete-user/:id", Deleteuser)

module.exports = Routes 