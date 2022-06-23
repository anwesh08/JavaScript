'use strict';

///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
const request = new XMLHttpRequest() //Old school way of doing AJAX in JS
request.open('GET', `https://restcountries.eu/rest/v2/name/portugal`)
request.send()