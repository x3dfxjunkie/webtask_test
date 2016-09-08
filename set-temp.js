var MongoClient = require('mongodb').MongoClient;
var Request = require('request');

module.exports = function (wu_api_key, temp, bail) {
    var WeatherUnderground = 'https://api.wunderground.com/api/' + wu_api_key + '/conditions/q/zmw:23456.1.99999.json';
    Request(WeatherUnderground, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var weather = JSON.parse(body)
      }
    })
}
