#!/usr/local/bin/node

var mailer = require("nodemailer");

// Use Smtp Protocol to send Email
var smtpTransport = mailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: process.env.EmailAddress,
pass: process.env.EmailPassword
}
});

var mail = {
      from: process.env.EmailAddress,
      to: "benwang0912@gmail.com",
      subject: "test",
      html: "<img src='http://image.cuishilin.com/thumb/280x220/c/62/c62b2049905bc6f4b25a036d1c27a90b.jpg'>"
}

smtpTransport.sendMail(mail, function(error, response){
    if(error){
    console.log(error);
    }else{
    console.log("Message sent: " + response.message);
    }

    smtpTransport.close();
});
