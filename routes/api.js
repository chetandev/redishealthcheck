var express = require('express');
var router = express.Router();
var redis = require("redis");
var Promise = require('bluebird')

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

var client = redis.createClient({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST
});


client.on("error", function(err) {
    console.log("Error " + err);
});


client.on('connect', function() {
    console.log('redis connected');
});



router.get('/',  function(req, res) {
   console.log(client.connected)
   res.send(client.connected)

});

module.exports = router;