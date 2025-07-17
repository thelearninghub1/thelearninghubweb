const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Instrutional = require('../models/instructionalModel');
const ErrorHandler = require('../utils/errorhandler');
const cloudinary = require("cloudinary");


// Create Afiliation  -- Admin
exports.createInstrutional = catchAsyncErrors(async (req,res,next) =>{

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:"instrutional-avatars",
        quality:80,
        progressive:true
    });

    const {title,description} = req.body;

    const afiliation = await Instrutional.create({
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
exports.getAllInstrutional = catchAsyncErrors(async (req,res,next) =>{
    const afiliations = await Instrutional.find();

    res.status(200).json({
        success:true,
        afiliations
    })
});


// Afiliation Details
exports.singleInstrutionalDetails = catchAsyncErrors(async (req,res,next)=>{
    const afiliation = await Instrutional.findById(req.params.id);

    if (!afiliation) {
        return  next(new ErrorHandler(`Instrutional Not Found with this Id:${req.params.id}`,400))
    }

    res.status(200).json({
        success:true,
        afiliation
    })
});


// Update Afiliation  -- Admin
exports.updateInstrutional = catchAsyncErrors(async (req,res,next) =>{
    let affiliation = await Instrutional.findById(req.params.id);
    if (!affiliation) {
        return  next(new ErrorHandler(`Instrutional Not Found with this Id:${req.params.id}`,400))
    }

    const newdashboardData = {
            title:req.body.title,
            description:req.body.description,
        }
    
        if ( req.body.avatar ) {
            let dashboard = await Instrutional.findById(req.params.id);
            const imageId = dashboard.avatar.public_id;
            await cloudinary.v2.uploader.destroy(imageId);
                
            const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
                folder:"instrutional-avatars",
                quality:80,
                progressive:true
            })
        
            newdashboardData.avatar = {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
              };
            }


    affiliation = await Instrutional.findByIdAndUpdate(req.params.id,newdashboardData,{
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
exports.deleteInstrutional = catchAsyncErrors(async (req,res,next) =>{
    const afiliation = await Instrutional.findById(req.params.id);
    if (!afiliation) {
        return  next(new ErrorHandler(`Instrutional Not Found with this Id:${req.params.id}`,400))
    }

    await cloudinary.v2.uploader.destroy(afiliation.avatar.public_id);
    await afiliation.deleteOne();

    res.status(200).json({
        success:true,
        message:"Instrutional Deleted Successfully"
    })
});