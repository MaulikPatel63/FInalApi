const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    facultyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin"
    }, name: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    }, password: {
        type: String,
        required: true
    }, course: {
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

const student = mongoose.model('student', StudentSchema);
module.exports = student;
