var MongoClient = require('mongodb').MongoClient;
var Request = require('request');

module.exports = function (input, bail) {
    // Pass the api key in with the request.
    var WeatherUnderground = 'https://api.wunderground.com/api/' + input.data.WU_API_KEY + '/conditions/q/zmw:23456.1.99999.json';

    Request(WeatherUnderground, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // parse the json response from WU api
        var weather = JSON.parse(body).current_observation;
        // console.log(weather.relative_humidity);
        // console.log(weather.temp_f);
        // console.log(weather.pressure_in);
        // console.log(weather.weather);
        bail(null, 'Logged with location conditions: ' +
            weather.temp_f + ' f, ' +
            weather.relative_humidity + ' humidity, ' +
            weather.pressure_in + ' pressure, ' +
            'under ' + weather.weather + 'conditions'
        );
      }
    })
}
