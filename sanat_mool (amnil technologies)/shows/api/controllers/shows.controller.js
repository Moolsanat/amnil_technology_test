const app = require('../app.js');
const request = require('request');

module.exports = {
	getShows,
	getCalendar
}

function getShows(req, res){
	request.get("http://124.41.240.154:9803/api/nowshowinginfo", (err, data) => {
		if(err){
			console.log(err);
		}else{
			res.send(data.body);
		}
	});
}

function getCalendar(req, res){
	res.redirect('http://localhost:4200/#/shows')
}