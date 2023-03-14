const AdminModel = require('../models/AdminModel');
const StudentModel = require('../models/StudentModel');

const jwtData = require('jsonwebtoken');

const StudentRegister = async (req, res) => {
    try {
        let facultyId = req.body.facultyId;
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let course = req.body.course;
        let phone = req.body.phone;
        let city = req.body.city;
        let gender = req.body.gender;
        if (name != "") {
            if (email != "") {
                if (password != "") {
                    if (course != "") {
                        if (phone != "") {
                            if (city != "") {
                                if (gender != "") {
                                    let student = await StudentModel.create({
                                        facultyId: facultyId,
                                        name: name,
                                        email: email,
                                        password: password,
                                        course: course,
                                        phone: phone,
                                        city: city,
                                        gender: gender,
                                    });
                                    if (student) {
                                        return res.json({ "status": "1", "messege": "Student successfully register" });
                                    } else {
                                        return res.json({ "status": "0", "messege": "Student not register" });
                                    }
                                } else {
                                    return res.json({ "status": "0", "messege": "Gender is required" });
                                }
                            } else {
                                return res.json({ "status": "0", "messege": "city is required" });
                            }
                        } else {
                            return res.json({ "status": "0", "messege": "Phonr is required" });
                        }
                    } else {
                        return res.json({ "status": "0", "messege": "Course is required" });
                    }
                } else {
                    return res.json({ "status": "0", "messege": "Password is required" });
                }
            } else {
                return res.json({ "status": "0", "messege": "Email is required" });
            }
        } else {
            return res.json({ "status": "0", "messege": "Name is required" });
        }
    } catch (err) {
        return res.json({ "status": "0", "message": err });
    }
};

const StudentLogin = async (req, res) => {
    let email = req.body.email;
    try {
        let user = await StudentModel.findOne({ email: email });

        if (!user || user.password != req.body.password) {
            return res.json({ "status": "0", "message": "Email And Password is Not Match" });
        }

        let token = jwtData.sign(user.toJSON(), "MAULIK", { expiresIn: 1000 * 60 * 60 });
        return res.json({ "status": "1", "token": token });
    }
    catch (err) {
        return res.json({ "status": "0", "message": err });
    }
}

const StudentView = async (req, res) => {
    StudentModel.aggregate([
        {
            $lookup: {
                from: "studentes",
                localField: "_id",
                foreignField: "facultyId",
                as: "student"
            }
        },
        { $group: { _id: "$_Id" } }
    ])
    try {
        let viewStudent = await StudentModel.find({});
        if (viewStudent) {
            return res.json({ "status": "1", "messege": viewStudent });
        } else {
            return res.json({ "status": "0", "messege": "Record Not Found" });
        }
    } catch (err) {
        return res.json({ "status": "0", "messege": err });
    }
};


const StudentDelete = async (req, res) => {
    try {
        let id = req.body.id;
        let deletestudent = await StudentModel.findByIdAndDelete(id);
        if (deletestudent) {
            return res.json({ "status": "1", "message": "Student successfully deleted" });
        } else {
            return res.json({ "status": "0", "message": "Student Not deleted" });
        }
    } catch (err) {
        return res.json({ "status": "0", "messege": err });
    }
};

const StudentUpdate = async (req, res) => {
    try {
        let id = req.body.id;
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let course = req.body.course;
        let phone = req.body.phone;
        let city = req.body.city;
        let gender = req.body.gender;
        if (name != "") {
            if (email != "") {
                if (password != "") {
                    if (course != "") {
                        if (phone != "") {
                            if (city != "") {
                                if (gender != "") {
                                    let studentupdate = await StudentModel.findByIdAndUpdate(id, {
                                        name: name,
                                        email: email,
                                        password: password,
                                        course: course,
                                        phone: phone,
                                        city: city,
                                        gender: gender
                                    });
                                    if (studentupdate) {
                                        return res.json({ "status": "1", "messege": "Your Studentdata Is Successfully Updated" });
                                    } else {
                                        return res.json({ "status": "0", "messege": "Your Studentdata Is Not Updated" });
                                    }
                                } else {
                                    return res.json({ "status": "0", "messege": "Gender is required" });
                                }
                            } else {
                                return res.json({ "status": "0", "messege": "city is required" });
                            }
                        } else {
                            return res.json({ "status": "0", "messege": "Phonr is required" });
                        }
                    } else {
                        return res.json({ "status": "0", "messege": "Course is required" });
                    }
                } else {
                    return res.json({ "status": "0", "messege": "Password is required" });
                }
            } else {
                return res.json({ "status": "0", "messege": "Email is required" });
            }
        } else {
            return res.json({ "status": "0", "messege": "Name is required" });
        }
    } catch (err) {
        return res.json({ "status": "0", "messege": err });
    }
};

module.exports = { StudentRegister, StudentLogin, StudentView, StudentDelete, StudentUpdate };