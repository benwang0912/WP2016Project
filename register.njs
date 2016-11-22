#!/usr/local/bin/node
var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin','utf-8'));

var mongodb = require('mongodb');

var mongodbServer = new mongodb.Server('localhost',27017,{auto_reconnect: true, poolSize: 10});
var db = new mongodb.Db('mydb',mongodbServer);


db.open(function() {
  db.collection('user',function(err, collection){
  
  collection.insert({'username':param.username,'account': param.account,'password': param.password},function(err,data){
    
    if(data){
      console.log("Successful");
    }
    else{
      console.log("Failed");
    }
  });
  });
});
