#!/usr/local/bin/node 

var querystring = require('querystring');
var param = querystring.parse(process.env.QUERY_STRING);
var per = require('jsonfile');


per.readFile('name.json',function(err,data)
{
  console.log('Content-type:text/html; charset=utf-8\n');

  console.log("<h1>haha!I am"+data[param.name]+"<h1>");
})
