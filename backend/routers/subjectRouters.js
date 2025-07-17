const express = require('express');
const { createSubject, getAllSubjects, getSingleSubjectDetails, updateSubjectDetails, deleteSubjectDetails, adminAllSubjects } = require('../controllers/subjectControllers');
const { isAuthenticatedUser } = require('../utils/authentication');
const router = express.Router();

router.route('/admin/subject/create').post(isAuthenticatedUser,createSubject);

router.route('/subjects').get(getAllSubjects);

router.route('/admin/subjects').get(adminAllSubjects);

router.route('/admin/subject/:id').get(getSingleSubjectDetails).put(isAuthenticatedUser,updateSubjectDetails).delete(isAuthenticatedUser,deleteSubjectDetails);


module.exports = router