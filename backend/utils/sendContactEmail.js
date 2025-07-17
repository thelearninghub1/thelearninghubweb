const nodeMailer = require('nodemailer')
const sendContactEmail = async (options) => {
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
    from:options.email,
    to:process.env.SMTP_EMAIL,
    subject:options.subject,
    text:options.message
}

await transporter.sendMail(mailOptions)

}


module.exports = sendContactEmail