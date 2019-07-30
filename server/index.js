require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env

//Top Level Middleware
app.use(express.json())



app.listen( SERVER_PORT, () => console.log( `bingpot on port ${SERVER_PORT}`) )