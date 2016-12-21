#!/usr/local/bin/node 

var querystring = require('querystring');
var param = querystring.parse(process.env.QUERY_STRING);
var data = require('./name.json');

console.log('Content-type:text/html; charset=utf-8\n');

if(data[param.name2] == undefined)
{
  console.log("<h1><center><b>Oh! Hello STRANGER!!" + param.name2 + "</b></center></h1>");
}
else{
  if(data[data[param.name2]] == 1)
  {
    console.log("<center><img src=\"../尤辰因.png\" width=\"1000\"></center>");
  }
  else if(data[data[param.name2]] == 2)
  {
    console.log("<center><img src=\"../孫上智.png\" width=\"1000\"></center>");
  }
  else if(data[data[param.name2]] == 3)
  {
    console.log("<center><img src=\"../王心平.png\" width=\"1000\"></center>");
  }
  else if(data[data[param.name2]] == 4)
  {
    console.log("<center><img src=\"../張維碩.png\" width=\"1000\"></center>");
  }
  console.log("<h1><center>Welcome User:" + data[param.name2] +"</center></h1>");
}
