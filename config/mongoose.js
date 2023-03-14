const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Api_Project");

const db = mongoose.connection;

db.on('err',console.error.bind(console, "Mongoose not Connected"));

db.once('open', (err) => {
    if (err) {
        console.log("Mongoose not start"); 
        return false;
    }
    console.log("Mongoose start");
});

module.exports = db;