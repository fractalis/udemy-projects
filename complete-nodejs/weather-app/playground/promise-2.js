const request = require('request');

var geocodeAddress = (address) => {
  return new Promise( (resolve, reject) => {
    const URL = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.WEATHER_APP_KEY}&location=${encodeURIComponent(address)}`;
    request({
      url: URL,
      json: true
    }, (error, response, body) => {
      if (error || body.results.length === 0 || body.info.statuscode !== 0) {
        reject("Unable to find address");
      } else {
        let result = {
          address: body.results[0].providedLocation.location,
          lat: body.results[0].locations[0].latLng.lat,
          lng: body.results[0].locations[0].latLng.lng
        };
        resolve(result);
      }
    })
  })
};


geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
