const express = require('express');
const { createUser, loginUser, logoutUser, forgotPasssword, resetPassword, updatePassword, myDetails, updateAdminProfile } = require('../controllers/userControllers');
const { isAuthenticatedUser } = require('../utils/authentication');
const router = express.Router();


router.route('/user/create').post(createUser);

router.route('/user/login').post(loginUser);

router.route('/user/logout').get(logoutUser);

router.route('/forgot/password').post(forgotPasssword);

router.route('/password/reset/:token').put(resetPassword);

router.route('/password/update').put(isAuthenticatedUser,updatePassword);

router.route('/me').get(isAuthenticatedUser,myDetails);

router.route('/profile/update').put(isAuthenticatedUser,updateAdminProfile);


module.exports = router