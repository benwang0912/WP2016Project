#!/usr/local/bin/node 

var querystring = require('querystring');
var param = querystring.parse(process.env.QUERY_STRING);
var data = require('./name.json');

console.log('Content-type:text/html; charset=utf-8\n');

if(data[param.name] == undefined)
{
  console.log("<h1><center><b>Oh! Hello STRANGER!!" + param.name "</b></center></h1>");
}
else{
  if(data[data[param.name]] == 1)
  {
    console.log("<center><img src=\"WP2016Project/尤辰因.png\" width=\"1000\"></center>");
  }
  else if(data[data[param.name]] == 2)
  {
    console.log("<center><img src=\"WP2016Project/孫上智.png\" width=\"1000\"></center>");
  }
  else if(data[data[param.name]] == 3)
  {
    console.log("<center><img src=\"WP2016Project/王心平.png\" width=\"1000\"></center>");
  }
  else if(data[data[param.name]] == 4)
  {
    console.log("<center><img src=\"WP2016Project/張維碩.png\" width=\"1000\"></center>");
  }
  console.log("<h1><center>Welcome User:" + data[param.name] +"</center></h1>");
}
