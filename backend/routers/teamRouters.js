const express = require('express');
const { createTeamMember, getAllTeamMembers, getSingleTeamMemberDetails, updateTeamMember, deleteTeamMember, getAllAdminMembers } = require('../controllers/teamControllers');
const { isAuthenticatedUser } = require('../utils/authentication');
const router = express.Router();

// Create Router
router.route('/admin/team/create').post(isAuthenticatedUser,createTeamMember);

router.route('/teams').get(getAllTeamMembers);

router.route('/admin/teams').get(getAllAdminMembers);

router.route('/admin/team/:id').get(getSingleTeamMemberDetails).put(updateTeamMember,isAuthenticatedUser).delete(isAuthenticatedUser,deleteTeamMember);

module.exports = router