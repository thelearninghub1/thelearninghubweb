const app = require('./app');
const dotenv = require("dotenv");
const connectDatabse = require('./config/database');
const couldinary = require("cloudinary");


// Uncaught Exception Error
process.on('uncaughtException',(err) => {
    console.log(`Server is shutting down due to uncaught Exception Error`);
    process.exit(1);
    
})


// Config
dotenv.config({path:"./backend/config/config.env"});

// Couldinary
couldinary.v2.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

// Connect Database
connectDatabse()


// Creating Server
const server =  app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
    
})


// Unhandled Rejection
process.on('unhandledRejection',(err) => {
    console.log(`Server is shutting down due to unhandled rejection`); 
    console.log(err.message);

    server.close(() => {
        
        process.exit(1);
        
    })
    
})