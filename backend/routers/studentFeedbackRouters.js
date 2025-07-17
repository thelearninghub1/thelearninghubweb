const express = require("express");
const { isAuthenticatedUser } = require("../utils/authentication");
const { createStudentFeedback, getAllStudentFeedbacks, getSingleStudentFeedbackDetails, updateStudentFeedback, deleteStudentFeedback } = require("../controllers/studentFeedbackControllers");
const router = express.Router()



router.route('/admin/student/create').post(isAuthenticatedUser,createStudentFeedback);

router.route('/students').get(getAllStudentFeedbacks);

router.route('/admin/student/:id').get(getSingleStudentFeedbackDetails).put(updateStudentFeedback,isAuthenticatedUser).delete(isAuthenticatedUser,deleteStudentFeedback);

module.exports = router;