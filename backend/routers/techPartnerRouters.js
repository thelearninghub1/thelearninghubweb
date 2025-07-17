const express = require('express');
const { createPartner, getAllPartners, getSinglePartnerDetails, updatePartner, deletePartner } = require('../controllers/techPartnerControllers');
const { isAuthenticatedUser } = require('../utils/authentication');
const router = express.Router();

router.route('/admin/partner/create').post(isAuthenticatedUser,createPartner);

router.route('/partners').get(getAllPartners);

router.route('/admin/partner/:id').get(getSinglePartnerDetails).put(updatePartner,isAuthenticatedUser).delete(isAuthenticatedUser,deletePartner);

module.exports = router