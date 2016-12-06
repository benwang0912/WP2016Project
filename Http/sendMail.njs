#!/usr/local/bin/node

var fs = require('fs');
var qs = require('qs');
var mailer = require("nodemailer");

var param = qs.parse(fs.readFileSync('/dev/stdin', 'utf-8'));

console.log('Content-type: text/html; charset=utf-8\n');

// Use Smtp Protocol to send Email
var smtpTransport = mailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: "forwp2016finalproject@gmail.com",
pass: "webprogramming"
}
});

var mail = {
      from: "forwp2016finalproject@gmail.com",
      to: param.receiver,
      subject: "test",
      attachments:[{filename:"test.png",
                    contents: new Buffer(param.AD, 'base64'),
      }],
}

smtpTransport.sendMail(mail, function(error, response){
  if(error){
    console.log(error);
  }else{
    console.log("Message sent to: " + param.receiver);
  }

  smtpTransport.close();
});
