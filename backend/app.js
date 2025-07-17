const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const cors =  require("cors")
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const fs = require('fs');
const path = require('path');

const uploadsDir = path.join(__dirname, 'uploads');

// Check if the uploads directory exists; if not, create it
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json({limit:"50mb"}))
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,               // Allow cookies / auth headers
  }));


  // ✅ Apply express-fileupload ONLY for non-career routes
app.use((req, res, next) => {
  // Apply fileUpload to everything EXCEPT the career route
  if (!req.originalUrl.includes('/api/v1/submit-form')) {
    return fileUpload({
      useTempFiles: true,
      tempFileDir: '/tmp/',
    })(req, res, next);
  }
  next();
});

// Import All Routers
const teamRouters = require('./routers/teamRouters');
const teacherRouters = require('./routers/teacherRouters');
const techPartnerRouters = require('./routers/techPartnerRouters');
const subjectRouters = require('./routers/subjectRouters');
const userRouters = require('./routers/userRouters');
const feedbackRouters = require('./routers/feedbackRouters');
const cardRouters = require('./routers/rankCardRouters');
const studentFeedbackRouters = require('./routers/studentFeedbackRouters');
const contactUsRouters = require('./routers/contactUsRouters');
const careerRouters = require('./routers/careerRouter');
const afiliationRouters = require('./routers/afiliationRouter');
const extraActivitiesRouters = require('./routers/extraActivitiesRouter');
const calenderRouters = require('./routers/calenderRouter');


app.use('/api/v1', teamRouters);
app.use('/api/v1', teacherRouters);
app.use('/api/v1', techPartnerRouters);
app.use('/api/v1', subjectRouters);
app.use('/api/v1', userRouters);
app.use('/api/v1', feedbackRouters);
app.use('/api/v1', cardRouters);
app.use('/api/v1', studentFeedbackRouters);
app.use('/api/v1', contactUsRouters);
app.use('/api/v1', careerRouters);
app.use('/api/v1', afiliationRouters);
app.use('/api/v1', extraActivitiesRouters);
app.use('/api/v1', calenderRouters);


// All Middlewares Errors
const middlewareError = require('./middlewares/error');
app.use(middlewareError);



     // Frontend Connect to Backend
 
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
})
   
  
 


module.exports = app;