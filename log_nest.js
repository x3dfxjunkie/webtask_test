var MongoClient = require('mongodb').MongoClient;
var Request = require('request');

module.exports = function (data, bail) {
    // Pass the api key in with the request.
    var WeatherUnderground = 'https://api.wunderground.com/api/' + wu_api_key + '/conditions/q/zmw:23456.1.99999.json';

    Request(WeatherUnderground, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // parse the json response from WU api
        var weather = JSON.parse(body).current_observation;
        console.log(weather.relative_humidity);
        console.log(weather.temp_f);
        console.log(weather.pressure_in);
        console.log(weather.weather);
      }
    })
}
