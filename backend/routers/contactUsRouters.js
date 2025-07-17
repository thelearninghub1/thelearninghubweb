const express = require('express');
const { createContactUsMessage, createPartnerContactUsMessage, createCallBack } = require('../controllers/contactUsControllers');
const router = express.Router();


router.route('/contactUs').post(createContactUsMessage)

router.route('/call-back').post(createCallBack)

router.route('/partner-with-us').post(createPartnerContactUsMessage)

module.exports = router;