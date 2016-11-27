#!/usr/local/bin/node

var mailer = require("nodemailer");

// Use Smtp Protocol to send Email
var smtpTransport = mailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: "Account",
pass: "Password"
}
});

var mail = {
      from: "mailer",
      to: "recevier",
      subject: "title",
      html: "<b>Node.js New world for me</b>"
}

smtpTransport.sendMail(mail, function(error, response){
    if(error){
    console.log(error);
    }else{
    console.log("Message sent: " + response.message);
    }

    smtpTransport.close();
    });
