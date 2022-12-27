const express =  require('express');
const homeRoute = require('./routes/home')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();
const port = 8080;
const url = "mongodb://127.0.0.1:27017/quizDb"

//Database Setup
mongoose.connect(url, (err, client)=>{
    if(err) throw err
    console.log("Connection Successful!")
})

//ViewEngine setup
app.set('view engine','ejs')

//Static folder setup
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//Routing
app.use('/', homeRoute)

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})