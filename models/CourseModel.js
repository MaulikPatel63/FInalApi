const mongoose = require('mongoose');
const AdminModel = require('./AdminModel');

const CourseSchema = mongoose.Schema({
    facultyId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "admin"
    },
    course_name: {
        type: String,
        required: true
    },
    fees: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
});

const course = mongoose.model('course', CourseSchema);
module.exports = course;
