const sendApplicationMail = require('../utils/careerSendApplicationMail');

exports.careerApplication = async (req, res) => {
  try {
    const formData = req.body;
    const files = {
      cv: req.files['cv'],
      certificates: req.files['certificates'] || []
    };

    await sendApplicationMail(formData, files); // Send email with attachments

    res.status(200).json({
      success: true,
      message: 'Application sent successfully'
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error sending application' });
  }
};
