const express = require('express');
const router = express.Router();
const upload = require('../middlewares/careerMiddleware');
const { careerApplication } = require('../controllers/careerControllers');

router.post(
  '/submit-form',
  upload.fields([
    { name: 'cv', maxCount: 1 },
    { name: 'certificates', maxCount: 5 }
  ]),
  careerApplication // Process form data
);

module.exports = router;
