var express = require('express');
var router = express.Router();


var fooStatus = require('redis-status')({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST
});
 
router.get('/', function(req, res) {
  fooStatus.checkStatus(function(err) {
  	if(err){
  		res.status(500).send('error')
  	}else{
  		res.send('OK');
  	}
    
  });
});

module.exports = router;