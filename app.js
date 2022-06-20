// Import framework
const express = require('express');

// Routers
const {checkRouter} = require('./routes/checks.routes');

// Utils
const { db } = require('./utils/database.util');

// Init express app
const app = express();

// Use for server
app.use(express.json());

// http://localhost:4000/checks
app.use('/register', checkRouter);

// Authenticate and sync the database
db.authenticate()
    .then(()=>console.log('db authenticated'))
    .catch(err => console.log(err))

db.sync()
    .then(()=>console.log('db sync'))
    .catch(err => console.log(err))

// Server on listen (assinging the port)
app.listen(4000, ()=> {
    console.log('Express app running')
})