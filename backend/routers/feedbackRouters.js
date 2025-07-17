const express = require("express");
const { createFeedback, getAllFeedbacks, singleFeedbackDetails, updateFeedback, deleteFeedback } = require("../controllers/feedbackControllers");
const { isAuthenticatedUser } = require("../utils/authentication");
const router =  express.Router();


/// Feedback Routers

router.route('/admin/feedback/create').post(isAuthenticatedUser,createFeedback);

router.route('/feedbacks').get(getAllFeedbacks);


router.route('/admin/feedback/:id').get(singleFeedbackDetails).put(updateFeedback,isAuthenticatedUser).delete(isAuthenticatedUser,deleteFeedback);

module.exports =  router;