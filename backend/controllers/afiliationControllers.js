const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Afiliation = require('../models/afiliationModel');
const ErrorHandler = require('../utils/errorhandler');
const cloudinary = require("cloudinary");


// Create Afiliation  -- Admin
exports.createAfiliation = catchAsyncErrors(async (req,res,next) =>{

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:"afiliation-avatars",
        quality:80,
        progressive:true
    });

    const {title,description} = req.body;

    const afiliation = await Afiliation.create({
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
exports.getAllAfiliations = catchAsyncErrors(async (req,res,next) =>{
    const afiliations = await Afiliation.find();

    res.status(200).json({
        success:true,
        afiliations
    })
});


// Afiliation Details
exports.singleAfiliationDetails = catchAsyncErrors(async (req,res,next)=>{
    const afiliation = await Afiliation.findById(req.params.id);

    if (!afiliation) {
        return  next(new ErrorHandler(`Afiliation Not Found with this Id:${req.params.id}`,400))
    }

    res.status(200).json({
        success:true,
        afiliation
    })
});


// Update Afiliation  -- Admin
exports.updateAfiliation = catchAsyncErrors(async (req,res,next) =>{
    let affiliation = await Afiliation.findById(req.params.id);
    if (!affiliation) {
        return  next(new ErrorHandler(`Afiliation Not Found with this Id:${req.params.id}`,400))
    }

    const newdashboardData = {
            title:req.body.title,
            description:req.body.description,
        }
    
        if ( req.body.avatar ) {
            let dashboard = await Afiliation.findById(req.params.id);
            const imageId = dashboard.avatar.public_id;
            await cloudinary.v2.uploader.destroy(imageId);
                
            const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
                folder:"afiliation-avatars",
                quality:80,
                progressive:true
            })
        
            newdashboardData.avatar = {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
              };
            }


    affiliation = await Afiliation.findByIdAndUpdate(req.params.id,newdashboardData,{
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
exports.deleteAfiliation = catchAsyncErrors(async (req,res,next) =>{
    const afiliation = await Afiliation.findById(req.params.id);
    if (!afiliation) {
        return  next(new ErrorHandler(`Afiliation Not Found with this Id:${req.params.id}`,400))
    }

    await cloudinary.v2.uploader.destroy(afiliation.avatar.public_id);
    await afiliation.deleteOne();

    res.status(200).json({
        success:true,
        message:"Afiliation Deleted Successfully"
    })
});