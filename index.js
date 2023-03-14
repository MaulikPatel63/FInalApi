const express = require('express');

const port = 9000;

const app = express();

const path = require('path');

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const db = require('./config/mongoose');

const passportJwt = require('./config/passport-jwt-strategy');

const session = require('express-session');

app.use(session({
    name: "Api_Project",
    secret: "MAULIK1",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 100
    }
}))

app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log("server is not start");
        return false;
    }console.log("server is started successfully :- " + port);
});