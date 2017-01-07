#!/usr/local/bin/node

var fs = require('fs');
var qs = require('qs');

console.log('Content-type: text/html; charset=utf-8\n');


fs.readdir("./Banners/", function(err, files){
  files.forEach( file => {
    fs.stat("./Banners/" + file, function(err, stat){
      if(stat && stat.isDirectory()){
        fs.readdir("./Banners/"+file, function(err, filesInDir){
          filesInDir.forEach( fileInDir =>{

            console.log("Banners/" + file + "\/" + filesInDir);

          });
        });
      }else if(!err){

        console.log("Banners/" + file);

      }
    });
  });
});

