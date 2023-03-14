const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    }, password: {
        type: String,
        required: true
    }, phone: {
        type: String,
        required: true
    }, city: {
        type: String,
        required: true
    }, gender: {
        type: String,
        required: true
    }
});

const admin = mongoose.model('admin', AdminSchema);
module.exports = admin;
