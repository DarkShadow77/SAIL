const express = require("express");
const expressApp = require("./app");
const dbServer = require("./db");

const app = express()

const server = async () => {
    try {
        expressApp(app)
        await dbServer();
        app.listen(8080, ()=> {
            console.log("Server is Running");
        })
    } catch (error) {
        console.log(error.message);
    }
    
}

server();