const mongoose = require("mongoose")

const URL = "mongodb://localhost:27017/auth-flow";

const dbServer = async () => {
    try {
        const conn = await mongoose.connect(URL)
        console.log(`DB is connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = dbServer