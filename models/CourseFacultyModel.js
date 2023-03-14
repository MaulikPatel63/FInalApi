const mongoose = require('mongoose');

const facultycourseSchema = mongoose.Schema({
    facultyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin"
    },
    course_name: {
        type: String,
        required: true
    }
});

const facultycourse = mongoose.model('facultycourse', facultycourseSchema);
module.exports = facultycourse;
