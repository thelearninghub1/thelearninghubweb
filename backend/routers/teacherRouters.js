const express = require('express');
const { createTeacher, getAllTeachers, getSingleTeacherDetails, updateTeacherDetails, deleteTeacher, adminAllTeachers } = require('../controllers/teacherControllers');
const { isAuthenticatedUser } = require('../utils/authentication');
const router = express.Router();



router.route('/admin/teacher/create').post(isAuthenticatedUser,createTeacher);

router.route('/teachers').get(getAllTeachers);

router.route('/admin/teachers').get(adminAllTeachers);

router.route('/admin/teacher/:id').get(getSingleTeacherDetails).put(isAuthenticatedUser,updateTeacherDetails).delete(isAuthenticatedUser,deleteTeacher);


module.exports = router;