const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Teacher = require('../models/teacherModel');
const ApiFeatures = require('../utils/apifeatures');
const ErrorHandler = require('../utils/errorhandler');
const cloudinary = require("cloudinary");

// Create Teacher Card  -- Admin
exports.createTeacher = catchAsyncErrors(async (req,res,next) => {

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:"teacher-avatars",
        quality:80,
        progressive:true
    })

    const {
        name,
        title,
        description
    } = req.body;


    const teacher = await Teacher.create({
        name,
        title,
        description,
        avatar:{
            public_id:myCloud.public_id,
            url:myCloud.secure_url
        }
    });



    res.status(201).json({
        success: true,
        teacher
    });
});



// Get All Teachers 
exports.getAllTeachers = catchAsyncErrors(async (req,res,next) => {

    const teachersCount = await Teacher.countDocuments();

    const resultPerPage = 1;
    const apifeatures = new ApiFeatures(Teacher.find(),req.query).pagination(resultPerPage);
    const teachers = await apifeatures.query;

    res.status(200).json({
        success: true,
        teachersCount,
        data: teachers
    });
})


// Get All Teachers  -- Admin
exports.adminAllTeachers  = catchAsyncErrors(async (req,res,next) => {
    const teachers  = await Teacher.find();

    res.status(200).json({
        success:true,
        teachers
    })
})


// Get Single Teacher Details  
exports.getSingleTeacherDetails = catchAsyncErrors(async (req,res,next) => {

    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
        return next(new ErrorHandler(`Teacher not found with this id: ${req.params.id}`,400));
    }


    res.status(200).json({
        success: true,
         teacher
    });
})


// Update Teacher Details  -- Admin
exports.updateTeacherDetails = catchAsyncErrors(async (req,res,next) => {
    let teacher = await Teacher.findById(req.params.id);


    if (!teacher) {
        return next(new ErrorHandler(`Teacher not found with this id ${req.params.id}`,400));
    }

    const newdashboardData = {
        name:req.body.name,
        title:req.body.title,
        description:req.body.description,
    }

    if ( req.body.avatar ) {
        let dashboard = await Teacher.findById(req.params.id);
        const imageId = dashboard.avatar.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
            
        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
            folder:"teacher-avatars",
            quality:80,
            progressive:true
        })
    
        newdashboardData.avatar = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        }


    teacher = await Teacher.findByIdAndUpdate(req.params.id,newdashboardData,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })


    res.status(200).json({
        success: true,
         teacher
    });
});


/// Delete Teacher  -- Admin
exports.deleteTeacher = catchAsyncErrors(async (req,res,next) => {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
        return next(new ErrorHandler(`Teacher not found with this id: ${req.params.id}`,400));
    }
    await cloudinary.v2.uploader.destroy(teacher.avatar.public_id)

    await teacher.deleteOne();


    res.status(200).json({
        success: true,
        message: 'Teacher deleted successfully!'
    });
});