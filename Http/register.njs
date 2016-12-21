#!/usr/local/bin/node

var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin', 'utf-8'));


console.log('Content-type:text/html; charset=utf-8\n');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');

var url = '';


MongoClient.connect(url, function(err, db) {
    if(err){
    console.log("Connection failed");
    }
    else{
    console.log(param.account);
    var collection = db.collection('user');
      collection.insert(
        { username : param.username, account : param.account, password : param.password }
    , function(err, result) {
    if(err){
      console.log("Insertion failed");
    }
    });
    }
    db.close();
    });
