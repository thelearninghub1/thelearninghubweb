const express = require('express');
const { isAuthenticatedUser } = require('../utils/authentication');
const { createExtra, getAllExtra, singleExtraDetails, updateExtra, deleteExtra } = require('../controllers/extraActivitesControllers');
const { createInstrutional, getAllInstrutional, singleInstrutionalDetails, updateInstrutional, deleteInstrutional } = require('../controllers/instructionalControllers');
const { createSupport, getAllSupport, singleSupportDetails, updateSupport, deleteSupport } = require('../controllers/supportControllers');
const { createFeature, getAllFeature, singleFeatureDetails, deleteFeature, updateFeature } = require('../controllers/featureControllers');
const router = express.Router();

router.route('/admin/extra-activity/create').post(isAuthenticatedUser , createExtra)

router.route('/extra-activities').get(  getAllExtra);

router.route('/admin/extra-activity/:id').get(  singleExtraDetails).put(isAuthenticatedUser , updateExtra).delete(isAuthenticatedUser , deleteExtra);

// Instructional Details

router.route('/admin/instrutional/create').post(isAuthenticatedUser , createInstrutional)

router.route('/instrutionals').get(  getAllInstrutional);

router.route('/admin/instrutional/:id').get(  singleInstrutionalDetails).put(isAuthenticatedUser , updateInstrutional).delete(isAuthenticatedUser , deleteInstrutional);

// Acamic Support Details
router.route('/admin/support/create').post(isAuthenticatedUser , createSupport)

router.route('/supports').get(  getAllSupport);

router.route('/admin/support/:id').get(  singleSupportDetails).put(isAuthenticatedUser , updateSupport).delete(isAuthenticatedUser , deleteSupport);


// Feature Routers
router.route('/admin/feature/create').post(isAuthenticatedUser , createFeature)

router.route('/features').get(  getAllFeature);

router.route('/admin/feature/:id').get(  singleFeatureDetails).put(isAuthenticatedUser , updateFeature).delete(isAuthenticatedUser , deleteFeature);



module.exports = router;