import {getJSON, getLocation} from './utilities.js';

// const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';





// console.log('Location:'+ location);

// var url = baseUrl+location;
var url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100';

// console.log('Final URL:'+ url);




function testGetQuakesForLocation() {
  // call the getLocation function to get the lat/long
    const location = getLocation();
    const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
  // use that information to build out the correct URL
    const geoUrl = baseUrl + location; // add location information here
  // use the url to request the correct quakes 
    const response = getJSON(geoUrl);
  //log out the quakes for now.
  return response;
}

const res = testGetQuakesForLocation();

console.log('RESPONSE:'+ res);