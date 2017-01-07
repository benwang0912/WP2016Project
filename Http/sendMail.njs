#!/usr/local/bin/node

var fs = require('fs');
var qs = require('qs');
var mailer = require("nodemailer");
var data = require("./secrets.json");

var param = qs.parse(fs.readFileSync('/dev/stdin', 'utf-8'));

console.log('Content-type: text/html; charset=utf-8\n');

// Use Smtp Protocol to send Email
var smtpTransport = mailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: data['gmailAccount'],
pass: data['gmailPassword']
}
});

fs.stat("./Banners/", function(err, stat){
  if(err != null && err.code == "ENOENT"){
    fs.mkdir("./Banners/" + param.user.replace(/\n|\r/g, ""));
  }
});

var imagePath = "./Banners/" + param.user.replace(/\n|\r/g, "") + "/" + param.title+".png";

fs.writeFile( imagePath, param.AD,"base64" , function(error){
    if(error){
      console.log(error);
    }
});

var mail = {
      from: data['gmailAccount'],
      to: param.receiver,
      subject: param.title,
      html:"<img src='http://luffy.ee.ncku.edu.tw/~sinpin00/WP2016Project/Http/" + imagePath +"'>"
}

smtpTransport.sendMail(mail, function(error, response){
  if(error){
    console.log(error);
  }else{
    console.log("Message sent to: " + param.receiver);
  }

  smtpTransport.close();
});
