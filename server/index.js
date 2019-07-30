require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const {SERVER_PORT, SESSION_SECRET} = process.env
const middleware = require('./middleware')

//Top Level Middleware
app.use(express.json())
app.use(middleware.customMiddleware)
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

//Endpoints
const ctrl = require('./controller')
app.get(`/api/points`, ctrl.getPoints)


app.listen( SERVER_PORT, () => console.log( `bingpot on port ${SERVER_PORT}`) )