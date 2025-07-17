const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Subject = require("../models/subjectModel");
const ApiFeatures = require("../utils/apifeatures");
const ErrorHandler = require("../utils/errorhandler");
const cloudinary = require("cloudinary");


// Create Subject  -- Admin
exports.createSubject = catchAsyncErrors(async (req,res,next) => {

    let images = [];

    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }
  
    const imagesLinks = [];
  
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "web-subjects",
        quality:80,
        progressive:true
      });
  
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
  
    req.body.images = imagesLinks;

    const subject = await Subject.create({
        name:req.body.name,
        grade:req.body.grade,
        teacher:req.body.teacher,
        teacherQualification:req.body.teacherQualification,
        description:req.body.description,
        images:req.body.images

    });

    res.status(201).json({
        success: true,
         subject
    });
});


// Get All Subjects
exports.getAllSubjects = catchAsyncErrors(async (req,res,next) => {
    const subjectsCount = await Subject.countDocuments();
    const resultPerPage = 12; 
    const apifeatures = new ApiFeatures(Subject.find(),req.query).pagination(resultPerPage).filter()
    const subjects = await apifeatures.query;

    res.status(200).json({
        success: true,
        subjectsCount,
        resultPerPage,
        subjects
    });
});

// Get All Subject  -- Admin
exports.adminAllSubjects = catchAsyncErrors(async (req,res,next) => {
    const subjects = await Subject.find();

    res.status(200).json({
        success:true,
        subjects
    })
});


// Get Single Subject Details  
exports.getSingleSubjectDetails = catchAsyncErrors(async (req,res,next) => {
    const subject = await Subject.findById(req.params.id);

    if (!subject) {
        return next(new ErrorHandler(`Subject not found with this id: ${req.params.id}`,400));
    }
    res.status(200).json({
        success: true,
         subject
    });
});


// Update Subject Details  -- Admin
exports.updateSubjectDetails = catchAsyncErrors(async (req,res,next) => {
    let subject = await Subject.findById(req.params.id);

    if (!subject) {
        return next(new ErrorHandler(`Subject not found with this id: ${req.params.id}`,400));
    }

     // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < subject.images.length; i++) {
      await cloudinary.v2.uploader.destroy(subject.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "web-subjects",
        quality:80,
        progressive:true
    });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

    subject = await Subject.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        data: subject
    });
});


// Delete Subject Details -- Admin
exports.deleteSubjectDetails = catchAsyncErrors(async (req,res,next) => {
    const subject = await Subject.findById(req.params.id);

    if (!subject) {
        return next(new ErrorHandler(`Subject not found with this id: ${req.params.id}`,400));
    }

    for (let i = 0; i < subject.images.length; i++) {
        await cloudinary.v2.uploader.destroy(subject.images[i].public_id)
    }

    await subject.deleteOne();

    res.status(200).json({
        success: true,
        message: "Subject deleted successfully"
    });
});