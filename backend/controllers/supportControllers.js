const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Support = require('../models/supportModel');
const ErrorHandler = require('../utils/errorhandler');
const cloudinary = require("cloudinary");


// Create Afiliation  -- Admin
exports.createSupport = catchAsyncErrors(async (req,res,next) =>{

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:"support-avatars",
        quality:80,
        progressive:true
    });

    const {title,description} = req.body;

    const afiliation = await Support.create({
        title,
        description,
        avatar:{
            public_id:myCloud.public_id,
            url:myCloud.secure_url
        }
    });

    res.status(200).json({
        success:true,
        afiliation
    })
});



// Get Alll Afiliations 
exports.getAllSupport = catchAsyncErrors(async (req,res,next) =>{
    const afiliations = await Support.find();

    res.status(200).json({
        success:true,
        afiliations
    })
});


// Afiliation Details
exports.singleSupportDetails = catchAsyncErrors(async (req,res,next)=>{
    const afiliation = await Support.findById(req.params.id);

    if (!afiliation) {
        return  next(new ErrorHandler(`Academic Support Not Found with this Id:${req.params.id}`,400))
    }

    res.status(200).json({
        success:true,
        afiliation
    })
});


// Update Afiliation  -- Admin
exports.updateSupport = catchAsyncErrors(async (req,res,next) =>{
    let affiliation = await Support.findById(req.params.id);
    if (!affiliation) {
        return  next(new ErrorHandler(`Acamedic Support Not Found with this Id:${req.params.id}`,400))
    }

    const newdashboardData = {
            title:req.body.title,
            description:req.body.description,
        }
    
        if ( req.body.avatar ) {
            let dashboard = await Support.findById(req.params.id);
            const imageId = dashboard.avatar.public_id;
            await cloudinary.v2.uploader.destroy(imageId);
                
            const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
                folder:"support-avatars",
                quality:80,
                progressive:true
            })
        
            newdashboardData.avatar = {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
              };
            }


    affiliation = await Support.findByIdAndUpdate(req.params.id,newdashboardData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        affiliation
    })
    
    

});



// Delete Afiliation  -- Admin
exports.deleteSupport = catchAsyncErrors(async (req,res,next) =>{
    const afiliation = await Support.findById(req.params.id);
    if (!afiliation) {
        return  next(new ErrorHandler(`Acamedic Support Not Found with this Id:${req.params.id}`,400))
    }

    await cloudinary.v2.uploader.destroy(afiliation.avatar.public_id);
    await afiliation.deleteOne();

    res.status(200).json({
        success:true,
        message:"Acamedic Support Deleted Successfully"
    })
});