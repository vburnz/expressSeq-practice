const express = require("express"); 
const bodyParser = require("body-parser"); 
const { db } = require('./models'); 
const PORT = 3000; 

const app = express(); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//setting up a router 
app.use('/kittens', require('./routes'))

//sync database
// db.sync
// db.authenticate 

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}!`)
})



