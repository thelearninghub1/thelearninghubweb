const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Calender = require('../models/calenderModel');
const ErrorHandler = require('../utils/errorhandler');

// Create Calender -- Admin
exports.createCalender = catchAsyncErrors(async (req,res,next)=>{
    const calender = await Calender.create(req.body);

    res.status(201).json({
        success:true,
        calender
    })
});


// Get All Calenders 
exports.getAllCalenders = catchAsyncErrors(async (req,res,next)=>{
    const calenders = await Calender.find();

    res.status(200).json({
        success:true,
        calenders
    })
});


// Calender Details 
exports.getSingleCalender = catchAsyncErrors(async (req,res,next)=>{
    const calender = await Calender.findById(req.params.id);
    if (!calender) {
        return next(new ErrorHandler(`Calender Not found with this Id: ${req.params.id}`,400))
    };
    res.status(200).json({
        success:true,
        calender
    })
});


// Update Calender  -- Admin
exports.updateCalender = catchAsyncErrors(async (req,res,next)=>{
    let calender = await Calender.findById(req.params.id);
 if (!calender) {
        return next(new ErrorHandler(`Calender Not found with this Id: ${req.params.id}`,400))
    };

    calender =  await Calender.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        useFindAndModify:false,
        runValidators:true
    }) 

    res.status(200).json({
        success:true,
        calender
    })
})


// Delete Calender -- Admin
exports.deleteCalender = catchAsyncErrors(async (req,res,next)=>{
    const calender = await Calender.findById(req.params.id);
    if (!calender) {
        return next(new ErrorHandler(`Calender Not Found with this Id: ${req.params.id}`,400))
    };

    await calender.deleteOne();

    res.status(200).json({
        success:true,
        message:"Calender Deleted Successfully"
    })
});