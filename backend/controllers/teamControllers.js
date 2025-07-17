const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Team = require('../models/teamModel');
const ApiFeatures = require('../utils/apifeatures');
const ErrorHandler = require('../utils/errorhandler');
const cloudinary = require("cloudinary");


// Create Team Member  -- Admin
exports.createTeamMember = catchAsyncErrors(async (req,res,next) => {

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:"team-avatars",
        quality:80,
        progressive:true
    })

    const {
        name,
        title,
    } = req.body;
    const team = await Team.create({
        name,
        title,
        avatar:{
            public_id:myCloud.public_id,
            url:myCloud.secure_url
        }
    });


    res.status(201).json({
        success: true,
         team
    });
});
// Get All Team Members -- Admin
exports.getAllAdminMembers =  catchAsyncErrors(async (req,res,next)=>  {
    const teams = await Team.find()

    res.status(200).json({
        success:true,
        teams
    })
})
// Get All Team 
exports.getAllTeamMembers = catchAsyncErrors(async (req,res,next) => {
    const teamCounts = await Team.countDocuments();

    const resultPerPage = 1;

    const apifeatures = new ApiFeatures(Team.find(),req.query).pagination(resultPerPage);

    const teams = await apifeatures.query;



    res.status(200).json({
        success: true,
        teamCounts,
        data: teams,
    });
});

// Get Single Team Member Details 
exports.getSingleTeamMemberDetails = catchAsyncErrors( async (req,res,next) => {
    const team = await Team.findById(req.params.id);

    if (!team) {
        return next(new ErrorHandler(`Team not found with this id: ${req.params.id}`,400));
    }

    res.status(200).json({
        success: true,
       team
    });
});

// Update Team Member Details  -- Admin
exports.updateTeamMember = catchAsyncErrors(async (req,res,next) => {
    let team = await Team.findById(req.params.id);

    if (!team) {
        return next(new ErrorHandler(`Team not found with this id: ${req.params.id}`,400));
    }
    const newdashboardData = {
        name:req.body.name,
        title:req.body.title,
    }

    if ( req.body.avatar ) {
        let dashboard = await Team.findById(req.params.id);
        const imageId = dashboard.avatar.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
            
        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
            folder:"team-avatars",
            quality:80,
            progressive:true
        })
    
        newdashboardData.avatar = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        }

     team = await Team.findByIdAndUpdate(req.params.id,newdashboardData,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })


    res.status(200).json({
        success: true,
         team
    });
});



// Delete Team Member  -- Admin
exports.deleteTeamMember = catchAsyncErrors(async (req,res,next) => {
    const team = await Team.findById(req.params.id);

    if (!team) {
        return next(new ErrorHandler(`Team not found with this id: ${req.params.id}`,400));
    }

    await cloudinary.v2.uploader.destroy(team.avatar.public_id)

    await team.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Team member deleted successfully!'
    });
});