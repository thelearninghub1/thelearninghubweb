const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const RankCard = require('../models/rankCardModel');
const ErrorHandler = require('../utils/errorhandler');
const cloudinary = require("cloudinary");


// Create Card  -- Admin
exports.createCard = catchAsyncErrors(async (req,res,next)=>{

       const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
            folder:"card-avatars",
            quality:80,
            progressive:true
        })

    const {
        name,
        value
    } = req.body;

    const card = await RankCard.create({
        name,
        value,
        avatar:{
            public_id:myCloud.public_id,
            url:myCloud.secure_url
        }
    })

    res.status(201).json({
        success:true,
        card
    })
});



// All Cards 
exports.getAllCards = catchAsyncErrors(async (req,res,next)=>{
    const cards = await RankCard.find();


    res.status(200).json({
        success:true,
        cards
    })
});


/// Single Card Details
exports.getSingleCardDetails = catchAsyncErrors(async (req,res,next)=>{
    const card = await RankCard.findById(req.params.id);

    if (!card) {
        return next(new ErrorHandler(`Card Not Found With this Id ${req.params.id}`,400))
    };

    res.status(200).json({
        success:true,
        card
    })
});


// Update Card  -- Admin
exports.updateCard = catchAsyncErrors(async (req,res,next)=> {
    let card = await RankCard.findById(req.params.id)

    if (!card) {
        return next(new ErrorHandler(`Feedback Not found with this Id ${req.params.id}`,400))
    };
        const newdashboardData = {
            name:req.body.name,
            value:req.body.value,
        }
    
          if ( req.body.avatar ) {
                let dashboard = await RankCard.findById(req.params.id);
                const imageId = dashboard.avatar.public_id;
                await cloudinary.v2.uploader.destroy(imageId);
                    
                const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
                    folder:"feedback-avatars",
                    quality:80,
                    progressive:true
                })
            
                newdashboardData.avatar = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                  };
                }
        
        
            card = await RankCard.findByIdAndUpdate(req.params.id,newdashboardData,{
                new: true,
                runValidators: true,
                useFindAndModify: false
            })
    
    
            res.status(200).json({
                success:true,
                card
            })
});



/// Delete Card  -- Admin
 exports.deleteCard  = catchAsyncErrors(async (req,res,next)=>{
    const card = await RankCard.findById(req.params.id);
    if (!card) {
        return next(new ErrorHandler(`Feedback Not found with this Id ${req.params.id}`,400))
    };

    await cloudinary.v2.uploader.destroy(card.avatar.public_id);
    await card.deleteOne();

    res.status(200).json({
        success:true,
        message:"Card Deleted Successfully"
    })
 });