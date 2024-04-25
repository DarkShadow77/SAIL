const express = require("express");
const { signUp, getUsers, login, userProfile, error } = require("../controllers/UserController");

const userRoute = express.Router()

userRoute.post("/signup", signUp);
userRoute.post("/login", login);
userRoute.get("/", getUsers);
userRoute.get('/:id', userProfile);
userRoute.all('/*', error);


module.exports = userRoute;