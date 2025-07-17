const nodeMailer = require('nodemailer')
const sendEmail = async (options) => {
const transporter = nodeMailer.createTransport({
    port:process.env.SMTP_PORT,
    host:process.env.SMTP_HOST,
    service:process.env.SMTP_SERVICE,
    auth:{
        user:process.env.SMTP_EMAIL,
        pass:process.env.SMTP_PASSWORD
    }
})


const mailOptions = {
    from:process.env.SMTP_EMAIL,
    to:options.email,
    subject:options.subject,
    text:options.message
}

await transporter.sendMail(mailOptions)

}


module.exports = sendEmail