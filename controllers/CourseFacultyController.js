const CourseFacultyModel = require('../models/CourseFacultyModel');
const AdminModel = require('../models/AdminModel');
const StudentModel = require('../models/StudentModel');

// const FacultyCourse = async (req, res) => {
//     try {

//     } catch (err) {
//         return res.json({ "status": "0", "message": err });
//     }
// };
const StudentCourse = (req, res) => {
    AdminModel.aggregate([
        {
            $group: { _id: 0, course_name: 1, facultyId: 1 }
        }
    ], (err, data) => {
        if (err) {
            return res.json({ "status": "0", "messege": err });
        }
        return res.json({ "status": "1", "messege": data });
    })
}
const studentfaculty = (req, res) => {
    StudentModel.aggregate([
        {
            $project: { _id: 0, facultyId: 1, name: 1 }
        }
    ], (err, data) => {
        if (err) {
            return res.json({ "status": "0", "messege": err });

        }
        return res.json({ "status": "1", "messege": data });
    })
}

module.exports = {StudentCourse, studentfaculty };