//VIEW
//import
const express = require('express');
const mongoose = require('mongoose');

//set variables
const url = 'mongodb://localhost/AlienDBex';

//init
const app = express();

app.listen(9000, () => {
    console.log('Server is running...')
})

app.use(express.json());

//to manage router
const routingObj = require('./Routers/Routing')
//to set router, for all aliens request we have to use Routing router
app.use('/Routing', routingObj)



//init databse, open connection
//useNewUrlParser to aviod useless warnings from db
mongoose.connect(url, {useNewUrlParser : true})

const dbConnection = mongoose.connection

dbConnection.on('open', () => {
    console.log('database initiated')
});
