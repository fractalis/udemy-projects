const request = require('request');
const yargs = require('yargs');

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

const targetAddress = argv.address;
const URL = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.WEATHER_APP_KEY}&location=${encodeURIComponent(targetAddress)}`;

request({
  url: URL,
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].providedLocation.location}`);
  console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
  console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
});
