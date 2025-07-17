const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Partner = require('../models/techPartnerModel');
const ErrorHandler = require('../utils/errorhandler');
const cloudinary = require("cloudinary");


// Create Partner -- Admin
exports.createPartner = catchAsyncErrors(async (req,res,next) => {


    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:"tech-avatars",
        quality:80,
        progressive:true
    })


    const {name, description} = req.body;

   
    

    const partner = await Partner.create({
        name,
        description,
        avatar: {
            public_id:myCloud.public_id,
            url:myCloud.secure_url
        }
    });

    res.status(201).json({
        success: true,
         partner
    });
});


// Get All Partners 
exports.getAllPartners = catchAsyncErrors(async (req,res,next) => {
    const partnersCount = await Partner.countDocuments();
    const partners = await Partner.find();

    res.status(200).json({
        success: true,
        partnersCount,
         partners
    });
});


// Get Single Partner Details 
exports.getSinglePartnerDetails = catchAsyncErrors(async (req,res,next) => {
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
        return next(new ErrorHandler(`Partner not found with this id: ${req.params.id}`,400));
    }
    res.status(200).json({
        success: true,
        partner
    });
});


// Update partner  -- Admin
exports.updatePartner = catchAsyncErrors(async (req,res,next)=>{
    let partner = await Partner.findById(req.params.id);

    if (!partner) {
        return next(new ErrorHandler(`Partner not found with this id: ${req.params.id}`,400));
    };

    const newdashboardData = {
            name:req.body.name,
            description:req.body.description,
        }
    
        if ( req.body.avatar ) {
            let dashboard = await Partner.findById(req.params.id);
            const imageId = dashboard.avatar.public_id;
            await cloudinary.v2.uploader.destroy(imageId);
                
            const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
                folder:"tech-avatars",
                quality:80,
                progressive:true
            })
        
            newdashboardData.avatar = {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
              };
            }
    
    

    partner = await Partner.findByIdAndUpdate(req.params.id, newdashboardData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
         partner
    });
} );


// Delete Partner -- Admin
exports.deletePartner = catchAsyncErrors(async (req,res,next)  => {
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
        return next(new ErrorHandler(`Partner not found with this id: ${req.params.id}`,400));
    }

    await cloudinary.v2.uploader.destroy(partner.avatar.public_id)
    
    await partner.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Partner deleted successfully!'
    });
});