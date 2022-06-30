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

 // Chaining Promises
 const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);

const getCountryData = country => {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0])
      const neighbour = data[0].borders[0]
      if(!neighbour) return
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
};
getCountryData('germany');

// Handling Rejected Promises
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
//   countriesContainer.style.opacity = 1;
};

const renderError = msg => {
   countriesContainer.insertAdjacentText('beforeend', msg)
   // countriesContainer.style.opacity = 1
}

const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);

const getCountryData = country => {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`)
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try Again!`)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })
};
btn.addEventListener('click', () => {
  getCountryData('germany');
});

// Throwing Errors Manually
const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v2/name/${country}`,
    'Country Not Found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No new neighbour found!');
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country Not Found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => {
  getCountryData('germany');
});

///////////////////////////////////////
// The Event Loop in Practice
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
*/

console.log('Test end');

///////////////////////////////////////
// Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery Draw is happening 🔮')
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win 💰');
    } else {
      reject(new Error('You lost you money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}

wait(5).then(() => {
  console.log('I waited for 5 seconds')
  return wait(4)
})
  .then(() => console.log('I waited for 4 seconds'))

  
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));

///////////////////////////////////////
// Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));
const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
btn.addEventListener('click', whereAmI);
