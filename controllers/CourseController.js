const AdminModel = require('../models/AdminModel');
const CourseModel = require('../models/CourseModel');

const AddCourse = async (req, res) => {
    try {
        let Coursename = await CourseModel.create({
            facultyId: req.body.facultyId,
            course_name: req.body.course_name,
            fees: req.body.fees + '₹',
            duration: req.body.duration + ' Month'
        });
        if (Coursename) {
            return res.json({ "status": "1", "messege": "Course successfully register" });
        } else {
            return res.json({ "status": "0", "messege": "Course not successfully register" });
        }

    } catch (err) {
        return res.json({ "status": "0", "messege": err });
    }
};

const ViewCourse = async (req, res) => {
    AdminModel.aggregate([
        {
            $lookup: {
                from: "courses",
                localField: "_id",
                foreignField: "facultyId",
                as: "course"
            }
        },
        {$group : { _id: "$_Id" }}
    ])
    try {
        let viewcourse = await CourseModel.find({});
        if (viewcourse) {
            return res.json({ "status": "1", "messege": viewcourse });
        } else {
            return res.json({ "status": "0", "messege": "Record Not Found" });
        }
    } catch (err) {
        return res.json({ "status": "0", "messege": err });
    }
};

const DeleteCourse = async (req, res) => {
    try {
        let id = req.body.id;
        let deletecourse = await CourseModel.findByIdAndDelete(id);
        if (deletecourse) {
            return res.json({ "status": "1", "message": "Course successfully deleted" });
        } else {
            return res.json({ "status": "0", "message": "Course Not deleted" });
        }
    } catch (err) {
        return res.json({ "status": "0", "messege": err });
    }
};

const UpdateCourse = async (req, res) => {
    try {
        id = req.body.id;
        let updatecourse = await CourseModel.findByIdAndUpdate(id, {
            facultyId: req.body.facultyId,
            course_name: req.body.course_name,
            fees: req.body.fees + '₹',
            duration: req.body.duration + ' Month'
        });
        if (updatecourse) {
            return res.json({ "status": "1", "messege": "Your Course Is Successfully Updated" });
        } else {
            return res.json({ "status": "0", "messege": "Your Course Is Not Updated" });
        }
    } catch (err) {
        return res.json({ "status": "0", "messege": err });
    }
};

module.exports = { AddCourse, ViewCourse, DeleteCourse, UpdateCourse }