const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Feature = require('../models/featureModel');
const ErrorHandler = require('../utils/errorhandler');
const cloudinary = require("cloudinary");


// Create Feature  -- Admin
exports.createFeature = catchAsyncErrors(async (req,res,next) =>{

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:"feature-avatars",
        quality:80,
        progressive:true
    });

    const {title,description} = req.body;

    const afiliation = await Feature.create({
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



// Get Alll Feature 
exports.getAllFeature = catchAsyncErrors(async (req,res,next) =>{
    const afiliations = await Feature.find();

    res.status(200).json({
        success:true,
        afiliations
    })
});


// Afiliation Details
exports.singleFeatureDetails = catchAsyncErrors(async (req,res,next)=>{
    const afiliation = await Feature.findById(req.params.id);

    if (!afiliation) {
        return  next(new ErrorHandler(`Feature Not Found with this Id:${req.params.id}`,400))
    }

    res.status(200).json({
        success:true,
        afiliation
    })
});


// Update Feature  -- Admin
exports.updateFeature = catchAsyncErrors(async (req,res,next) =>{
    let affiliation = await Feature.findById(req.params.id);
    if (!affiliation) {
        return  next(new ErrorHandler(`Feature Not Found with this Id:${req.params.id}`,400))
    }

    const newdashboardData = {
            title:req.body.title,
            description:req.body.description,
        }
    
        if ( req.body.avatar ) {
            let dashboard = await Feature.findById(req.params.id);
            const imageId = dashboard.avatar.public_id;
            await cloudinary.v2.uploader.destroy(imageId);
                
            const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
                folder:"feature-avatars",
                quality:80,
                progressive:true
            })
        
            newdashboardData.avatar = {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
              };
            }


    affiliation = await Feature.findByIdAndUpdate(req.params.id,newdashboardData,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        affiliation
    })
    
    

});



// Delete Feature  -- Admin
exports.deleteFeature = catchAsyncErrors(async (req,res,next) =>{
    const afiliation = await Feature.findById(req.params.id);
    if (!afiliation) {
        return  next(new ErrorHandler(`Feature Not Found with this Id:${req.params.id}`,400))
    }

    await cloudinary.v2.uploader.destroy(afiliation.avatar.public_id);
    await afiliation.deleteOne();

    res.status(200).json({
        success:true,
        message:"Feature Deleted Successfully"
    })
});