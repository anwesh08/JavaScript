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
 */