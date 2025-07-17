const express = require("express");
const { createCard, getAllCards, getSingleCardDetails, deleteCard, updateCard } = require("../controllers/rankCardControllers");
const { isAuthenticatedUser } = require("../utils/authentication");
const router = express.Router()



router.route('/admin/card/create').post(isAuthenticatedUser,createCard);

router.route('/cards').get(getAllCards);

router.route('/admin/card/:id').get(getSingleCardDetails).put(updateCard,isAuthenticatedUser).delete(isAuthenticatedUser,deleteCard);

module.exports = router;