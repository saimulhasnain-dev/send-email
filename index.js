const nodemailer = require("nodemailer");
// Create sending email smtp setup
var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email", // you can replace your smtp host here
    port: 587, //replace port as per your provider
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'darius.schumm44@ethereal.email',
        pass: 'Bhp8W67ysmYaZEAK2v'
    },
  });
  
  var mailOptions = {
    from: 'test@yopmail.com',
    to: 'friend@mailinator.com',
    subject: 'Sending Email using Node.js using smtp',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });