#!/usr/local/bin/node 

var querystring = require('querystring');
var param = querystring.parse(pocess.env.QUERY_STRING);
var per = require('./name.json');

console.log('Content-type:text/html; charset=utf-8\n');

per.readFile('name.json',function(err,data)
{
  console.log('<h1>haha!I am'+data[param.name]+'<h1>');
})
