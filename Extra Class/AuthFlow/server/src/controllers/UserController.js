const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const UserModel = require("../models/User");

// Signup - Creating the User
const signUp = async (req, res) => {
    try {
        // const data = {
        //     firstName: req.body.firstName,
        //     lastName: req.body.lastName,
        //     email: req.body.email,
        //     password: req.body.password,
        //     age: req.body.age,
        // }

        // To encrpt a password you use th package called bcrypt
        // npm i bcrypt

        const { firstName, lastName, email, password, age } = req.body

        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(password, salt)

        const isEmailExist = await UserModel.exists({ email })

        if (isEmailExist) {
            return res.status(404).json({ message: "Email is already taken" })
        }
        const newUser = await UserModel.create({
            firstName,
            lastName,
            email,
            password: hash,
            age,
        })

        console.log(req.body)
        return res.status(200).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

//Login 

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        //check user in our bd
        const findUser = await UserModel.findOne({ email })
        if (findUser === null) {
            return res.status(404).json({ message: "User does not exist" })
        }

        //compare the password
        const compare = await bcrypt.compare(password, findUser.password)
        if (!compare) {
            return res.status(404).json({ message: "Wrong Password" })
        }

        //tokenize the user
        const payload = {
            id: findUser._id,
            email: findUser.email,
        }

        const token = jwt.sign(payload, "firstDatabase", {
            expiresIn: "10",
        })

        //return Login Successfully
        return res.status(200).json({ message: "Lofgin Successful", email: findUser.email, token })
    } catch (error) {
        res.status(400).json(error.message);
    }
}

//Users

const getUsers = async (req, res) => {
    try {
        const user = await UserModel()
        console.log("Hello")
        return res.status(200).json({ message: "Hello Users", users: user })
    } catch (error) {

    }
}

//User Profile
const userProfile = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findById({ _id: id });
        return res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const error = async (req, res) => {
    try {
        return res.status(200).json({message: "Bad Request"});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = { signUp, getUsers, login, userProfile,error }