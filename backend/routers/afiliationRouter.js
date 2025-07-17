const express = require('express');
const { isAuthenticatedUser } = require('../utils/authentication');
const { createAfiliation, getAllAfiliations, singleAfiliationDetails, updateAfiliation, deleteAfiliation } = require('../controllers/afiliationControllers');
const router = express.Router();


router.route('/admin/afiliation/create').post(isAuthenticatedUser,createAfiliation);

router.route('/afiliations').get(getAllAfiliations);

router.route('/admin/afiliation/:id').get(singleAfiliationDetails).put(isAuthenticatedUser,updateAfiliation).delete(isAuthenticatedUser,deleteAfiliation);

module.exports = router;