const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const StudentFeedback = require('../models/studentFeedbackModel');
const ErrorHandler = require('../utils/errorhandler');


//  Create Feedback  -- Admin
exports.createStudentFeedback = catchAsyncErrors(async (req, res, next) => {

    const { ytLink } = req.body;

    const feedback = await StudentFeedback.create({
        ytLink,
    });

    res.status(201).json({
        success: true,
        feedback,
    });
});


// Get All Feedbacks
exports.getAllStudentFeedbacks = catchAsyncErrors(async (req, res, next) => {
    const feedbacks = await StudentFeedback.find();

    res.status(200).json({
        success: true,
        feedbacks,
    });
})


// Get Single Feedback Details
exports.getSingleStudentFeedbackDetails = catchAsyncErrors(async (req, res, next) => {
    const feedback = await StudentFeedback.findById(req.params.id);

    if (!feedback) {
        return next(new ErrorHandler(`Feedback not found with this id: ${req.params.id}`, 400));
    }
    res.status(200).json({
        success: true,
        feedback,
    });
});


// Update Feedback  -- Admin
exports.updateStudentFeedback = catchAsyncErrors(async (req, res, next) => {
    const feedback = await StudentFeedback.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    if (!feedback) {
        return next(new ErrorHandler(`Feedback not found with this id: ${req.params.id}`, 400));
    }

    res.status(200).json({
        success: true,
        feedback,
    })
});



// Delete Feedback  -- Admin
exports.deleteStudentFeedback = catchAsyncErrors(async (req, res, next) => {
    const feedback = await StudentFeedback.findById(req.params.id);

    if (!feedback) {
        return next(new ErrorHandler(`Feedback not found with this id: ${req.params.id}`, 400));
    }

    await feedback.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Feedback Deleted Successfully',
    });
});