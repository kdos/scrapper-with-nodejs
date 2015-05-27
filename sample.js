var http = require('http');
var path = require('path');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var buf = "";
var count = 0;/*
    fs.readdir(process.argv[2], function (error, list) {  
        buf = print(list);
        console.log(count);
    });

function print(list){
	
for(i in list){
	var ext = path.extname(list[i]);
	if(ext == "."+process.argv[3])count++;
	console.log(ext);
}

*/
request('http://getithaka.com/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    		var $ = cheerio.load(body);
    		$('.iconbox-desc').each(function(i,element) {
    			var matter = $(this).text();
    			//description[i] = matter;
    			var str = matter.trim();
    			console.log(str);
    		});
    		console.log("done");
      }
})