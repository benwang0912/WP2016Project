#!/usr/local/bin/node 

var querystring = require('querystring');
var param = querystring.parse(process.env.QUERY_STRING);
var data = require('./name.json');

console.log('Content-type:text/html; charset=utf-8\n');

if(data[param.name] == undefined)
{
  console.log("<h1><b>WHO?</b></h1>");
}
else{
  console.log("<h1>Haha! I am" + data[param.name] +"</h1>");
}
