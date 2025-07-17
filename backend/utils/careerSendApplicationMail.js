const nodemailer = require('nodemailer');

const sendApplicationMail = async (formData, files) => {
  const { name, email, country, applyFor, message } = formData;
  const { cv, certificates } = files;

  const transporter = nodemailer.createTransport({
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const attachments = [
    {
      filename: cv[0].originalname,
      path: cv[0].path
    },
    ...(certificates || []).map(file => ({
      filename: file.originalname,
      path: file.path
    }))
  ];

  const mailOptions = {
    from: email,
    to: process.env.SMTP_EMAIL,
    subject: `New Application from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Country: ${country}
Apply For: ${applyFor}
Message: ${message}
Best Regards,
${name}
    `,
    attachments
  };

  await transporter.sendMail(mailOptions); // Send email with attachments
};

module.exports = sendApplicationMail;
