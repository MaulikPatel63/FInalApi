const AdminModel = require('../models/AdminModel');

const AdminInsert = async (req, res) => {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let phone = req.body.phone;
        let city = req.body.city;
        let gender = req.body.gender;
        if (name != "") {
            if (email != "") {
                if (password != "") {
                    if (phone != "") {
                        if (city != "") {
                            if (gender != "") {
                                let admin = await AdminModel.create({
                                    name: name,
                                    email: email,
                                    password: password,
                                    phone: phone,
                                    city: city,
                                    gender: gender
                                });
                                if (admin) {
                                    return res.json({ "status": "1", "messege": "Admin successfully register" });
                                } else {
                                    return res.json({ "status": "0", "messege": "Admin not successfully register" });
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
                    return res.json({ "status": "0", "messege": "Password is required" });
                }
            } else {
                return res.json({ "status": "0", "messege": "Email is required" });
            }
        } else {
            return res.json({ "status": "0", "messege": "Name is required" });
        }
    }
    catch (err) {
        return res.json({ "status": "0", "message": err });
    }
}

const AdminView = async (req, res) => {
    try {
        let adminview = await AdminModel.find({});
        if (adminview) {
            return res.json({ "status": "1", "message": adminview });
        } else {
            return res.json({ "status": "0", "message": "record is not fatch" });
        }
    } catch (err) {
        return res.json({ "status": "0", "message": err });
    }
};

const AdminDelete = async (req, res) => {
    try {
        let id = req.body.id;
        let Delete = await AdminModel.findByIdAndDelete(id);
        if (Delete) {
            return res.json({ "status": "1", "message": "Admin successfully deleted" });
        } else {
            return res.json({ "status": "0", "message": "Admin Not deleted" });
        }
    } catch (err) {
        return res.json({ "status": "0", "messege": err });
    }
};

const AdminUpdate = async (req, res) => {
    try {
        let id = req.body.id;
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let phone = req.body.phone;
        let city = req.body.city;
        let gender = req.body.gender;
        if (name != "") {
            if (email != "") {
                if (password != "") {
                    if (phone != "") {
                        if (city != "") {
                            if (gender != "") {
                                let Edit = await AdminModel.findByIdAndUpdate(id, {
                                    name: name,
                                    email: email,
                                    password: password,
                                    phone: phone,
                                    city: city,
                                    gender: gender
                                });
                                if (Edit) {
                                    return res.json({ "status": "1", "message": "Admin successfully Update" });
                                } else {
                                    return res.json({ "status": "0", "message": "Admin successfully Update" });
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
}

module.exports = { AdminInsert, AdminView, AdminDelete, AdminUpdate }