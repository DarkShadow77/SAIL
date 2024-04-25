const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "firstName is required"],

        },
        lastName: {
            type: String,
            required: [true, "lastName is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        age: {
            type: Number,
        }

    },
    {
        timestamps: true,
    }
)

const UserModel = mongoose.model("users", userSchema)

module.exports = UserModel