#!/usr/local/bin/node
var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin','utf-8'));

console.log('Content-type:text/html; charset=utf-8\n');
console.log('<h1>successful</h1>');

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://wp2016_groupM:marketing@localhost:27017/wp2016_groupM';

MongoClient.connect(url,function(err,db)
{
  if(err)
  {
    console.log("Unable to connect to the server. Error:",err);
  }
  else{
    console.log("connection establish to",url);
  
    var collection = db.collection('user');
    collection.find( { account: "param.account" ,password: "param.password"},function(err,result){
    if(err)
    {
      console.log(err);
      console.log('Login failed');
    }
    else {
      console.log('Welcome,' + result.account);
    }
      
    db.close();
  });
  }
});
