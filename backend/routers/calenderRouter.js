const express = require('express');
const { isAuthenticatedUser } = require('../utils/authentication');
const { createCalender, getAllCalenders, getSingleCalender, updateCalender, deleteCalender } = require('../controllers/calenderControllers');
const router = express.Router();

router.route('/admin/calender/create').post(isAuthenticatedUser,createCalender);

router.route('/calenders').get(getAllCalenders);

router.route('/admin/calender/:id').get(getSingleCalender).put(isAuthenticatedUser,updateCalender).delete(isAuthenticatedUser,deleteCalender);

module.exports = router