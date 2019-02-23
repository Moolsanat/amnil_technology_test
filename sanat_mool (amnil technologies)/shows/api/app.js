const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const route = require('./route.js');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json());

app.use('', route);

app.listen(8080, (err) => {
	if(err){
		throw err;
	}else{
		console.log("Server running at port 8080");
	}
}); 