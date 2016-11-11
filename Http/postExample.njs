#!/usr/local/bin/node

var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin', 'utf-8'));

console.log('Content-type: text/html; charset=utf-8\n');
console.log('<h1>Hello, ' + param.account + ' ' + param.password + '</h1>');
