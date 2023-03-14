const express = require('express');

const routes = express.Router();

// Controller routes
const registercontroller = require('../controllers/RegisterController');
const AdminController = require('../controllers/AdminController');
const CourseController = require('../controllers/CourseController');
const StudentController = require('../controllers/StudentController');
const CourseFacultyController = require('../controllers/CourseFacultyController');

const passport = require('passport');
// const course = require('../models/CourseModel');

routes.post('/registerData', registercontroller.registerData);
routes.post('/loginData', registercontroller.loginData);

//admin routes
routes.post('/AdminInsert', AdminController.AdminInsert);
routes.get('/AdminView', passport.authenticate('jwt', { session: false }), AdminController.AdminView);
routes.delete('/AdminDelete', passport.authenticate('jwt', { session: false }), AdminController.AdminDelete);
routes.put('/AdminUpdate', passport.authenticate('jwt', { session: false }), AdminController.AdminUpdate);

// course routes
routes.post('/AddCourse', passport.authenticate('jwt', { session: false }), CourseController.AddCourse);
routes.get('/ViewCourse', passport.authenticate('jwt', { session: false }), CourseController.ViewCourse);
routes.delete('/DeleteCourse', passport.authenticate('jwt', { session: false }), CourseController.DeleteCourse);
routes.put('/UpdateCourse', passport.authenticate('jwt', { session: false }), CourseController.UpdateCourse);

//student routes
routes.post('/StudentRegister', StudentController.StudentRegister);
routes.post('/StudentLogin', StudentController.StudentLogin);
routes.get('/StudentView', passport.authenticate('jwt', { session: false }), StudentController.StudentView);
routes.delete('/StudentDelete', passport.authenticate('jwt', { session: false }), StudentController.StudentDelete);
routes.patch('/StudentUpdate', passport.authenticate('jwt', { session: false }), StudentController.StudentUpdate);

//datashow routes
// routes.get('/FacultyCourse', passport.authenticate('jwt', { session: false }), CourseFacultyController.FacultyCourse);
routes.get('/StudentCourse', passport.authenticate('jwt', { session: false }), CourseFacultyController.StudentCourse);
routes.get('/studentfaculty', passport.authenticate('jwt', { session: false }), CourseFacultyController.studentfaculty);

module.exports = routes;