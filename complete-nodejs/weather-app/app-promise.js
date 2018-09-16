const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for.',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.WEATHER_APP_KEY}&location=${encodedAddress}`;

axios.get(geocodeUrl).then( (response) => {
  if (response.data.results.length === 0) {
    throw new Error('Unable to find address');
  }
  var lat = response.data.results[0].locations[0].latLng.lat
  var lng = response.data.results[0].locations[0].latLng.lng
  var formattedAddress = response.data.results[0].providedLocation.location;
  var weatherUrl = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${lng}`;
  return axios.get(weatherUrl);
}).then( (response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It is currently ${temperature}. It feels like ${apparentTemperature}`);
  
}).catch( (e) => {
  if (e.code === 'ECONNREFUSED') {
    console.log('Geocode API: Connection refused');
  } else {
    console.log(e.message)
  }
});
