#!/usr/local/bin/node
var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin','utf-8'));

console.log('Content-type:text/html; charset=utf-8\n');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = '';

MongoClient.connect(url,function(err,db)
{
  if(err)
  {
    console.log("Unable to connect to the server. Error:",err);
  }
  else{
  
    var collection = db.collection('user');
    collection.find( { account: "param.account" ,password: "param.password"},function(err,result){
    if(err)
    {
      console.log(err);
      console.log('Login failed');
    }
    else {
   
      console.log(param.account);
    }
      
    db.close();
  });
  }
});
