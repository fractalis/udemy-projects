const request = require('request');

function geocodeAddress(address, callback) {
  const URL = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.WEATHER_APP_KEY}&location=${encodeURIComponent(address)}`;
  request({
    url: URL,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to Mapquest API");
    } else if (body.results.length === 0) {
      callback("Unable to find address");
    } else if (body.info.statuscode === 0) {
      let result = {
        address: body.results[0].providedLocation.location,
        lat: body.results[0].locations[0].latLng.lat,
        lng: body.results[0].locations[0].latLng.lng
      };
      callback(undefined, result);
    } else {
      callback("Unknown statuscode");
    }
  });
}

module.exports = {
  geocodeAddress
};
