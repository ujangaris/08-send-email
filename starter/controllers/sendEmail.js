const nodemailer = require('nodemailer');
const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'cole.jenkins99@ethereal.email',
      pass: 'kSShShmn7CJjX4h2Mx',
    },
  });

  let info = await transporter.sendMail({
    from: '"Ujang Arisandi" <ujangaja@gmail.com>',
    to: 'arisandiujang@gmail.com',
    subject: 'Hello',
    html: '<h2>Sending Email with Node.js</h2>',
  });
  res.json(info);
};

module.exports = sendEmail;
