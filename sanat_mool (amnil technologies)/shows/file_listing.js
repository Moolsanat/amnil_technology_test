const fs = require('fs');
path = require('path');

//give the location of the directory of which files and folders needs to be listed
let dir = "src/app";

function getFiles(dir){
	console.log('[+]', dir);
	var files = fs.readdirSync(dir);
	for(var x in files){
		var next = path.join(dir,files[x]);
		//isDirectory checks if it is a file or directory
		if(fs.lstatSync(next).isDirectory() == true){
			getFiles(next);
		}else{
			console.log('\t', next);
		}
	}
}

getFiles(dir);
