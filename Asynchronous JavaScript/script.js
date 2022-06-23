'use strict';

///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
/*
const getCountryData = country => {
   const request = new XMLHttpRequest(); //Old school way of doing AJAX in JS
   request.open('GET', `https://restcountries.com/v2/name/${country}`);
   request.send();
   // console.log(request.responseText)
 
   request.addEventListener('load', function () {
     // console.log(this.responseText)
     const [data] = JSON.parse(this.responseText);
     console.log(data);
     const html = `
       <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
             <h3 class="country__name">${data.name}</h3>
             <h4 class="country__region">${data.region}</h4>
             <p class="country__row"><span>👫</span>${(
               +data.population / 1000000
             ).toFixed(1)} people</p>
             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
             <p class="country__row"><span>💰</span>${
               data.currencies[0].code
             }</p>
          </div>
       </article>`;
     countriesContainer.insertAdjacentHTML('beforeend', html);
     countriesContainer.style.opacity = 1;
   });
 };

 getCountryData('portugal')
 getCountryData('peru')
 getCountryData('usa')
 getCountryData('spain')

///////////////////////////////////////
// Welcome to Callback Hell
const renderCountry = (data, className = '') => {
   const html = `
        <article class="country ${className}">
           <img class="country__img" src="${data.flags.svg}" />
           <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].code
              }</p>
           </div>
        </article>`;
   countriesContainer.insertAdjacentHTML('beforeend', html);
   countriesContainer.style.opacity = 1;
 };
 
 const getCountryAndNeighbour = country => {
   // AJAX call country 1
   const request = new XMLHttpRequest(); //Old school way of doing AJAX in JS
   request.open('GET', `https://restcountries.com/v2/name/${country}`);
   request.send();
   // console.log(request.responseText)
 
   request.addEventListener('load', function () {
     // console.log(this.responseText)
     const [data] = JSON.parse(this.responseText);
     console.log(data);
     //  Render Country
     renderCountry(data);
     //  Get Neighbour Country
     const [neighbour] = data.borders;
     if (!neighbour) return;
     // AJAX call country 2
     const request2 = new XMLHttpRequest(); //Old school way of doing AJAX in JS
     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
     request2.send();
     request2.addEventListener('load', function () {
       const data2 = JSON.parse(this.responseText);
       console.log(data2);
       renderCountry(data2, 'neighbour');
     });
   });
 };
 
 getCountryAndNeighbour('usa');

 ///////////////////////////////////////
// Consuming Promises

const getCountryData = country => {
   fetch(`https://restcountries.com/v2/name/${country}`)
     .then(response => response.json())
     .then(data => renderCountry(data[0]))
 };
 getCountryData('portugal');
*/