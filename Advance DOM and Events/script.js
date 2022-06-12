'use strict';

///////////////////////////////////////
// Selecting, Creating, and Deleting Elements
// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');

// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML
/*
const header = document.querySelector('h1');

const message = document.createElement('div');

message.classList.add('cookie-message');
message.textContent = 'We use cookie for improved functionality and analytics';
message.innerHTML = `We use cookie for improved functionality and analytics <button class="btn btn--close--cookie">Got it!</button>`;

// header.prepend(message)
header.append(message);
// header.append(message.cloneNode(true))

// header.before(message)
// header.after(message)

// Delete elements
document.querySelector('.btn--close--cookie').addEventListener('click', () => {
  message.remove();
});

///////////////////////////////////////
// Styles, Attributes and Classes
  
// Styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%'

console.log(message.style.backgroundColor)
console.log(message.style.color)

console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)

message.style.height = Number.parseInt(getComputedStyle(message).height, 10) + 40 + 'px'
console.log(getComputedStyle(message).height)

document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);
// logo.alt = 'Beautiful minimalist logo';

// Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// Data attributes
// console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// Don't use
// logo.clasName = 'jonas';
*/

///////////////////////////////////////
// Types of Events and Event Handlers
const h1 = document.querySelector('h1')
// h1.addEventListener('mouseenter', (e) => {
//    alert('addEventListener: Great! You are reading the heading :D')
// })

const alertH1 = () => {
   alert('addEventListener: Great! You are reading the heading :D')
   // h1.removeEventListener('mouseenter', alertH1)
}

h1.addEventListener('mouseenter', alertH1)

setTimeout(() => {
   h1.removeEventListener('mouseenter', alertH1)
}, 3000)

// h1.onmouseover = (e) => {
//    console.log(e)
//    alert('addEventListener: Great! You are reading the heading :D')
// }

///////////////////////////////////////
// Event Propagation in Practice
const randomInt = (min, max) => 
   Math.floor(Math.random() * (max- min + 1) + min)
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
console.log(randomColor())

/*
document.querySelector('.nav__link').addEventListener('click', function (e) {
   this.style.backgroundColor = randomColor();
   console.log('LINK', e.target, e.currentTarget);
   console.log(e.currentTarget === this);
   // Stop propagation
   // e.stopPropagation();
 });
 document.querySelector('.nav__links').addEventListener('click', function (e) {
   this.style.backgroundColor = randomColor();
   console.log('CONTAINER', e.target, e.currentTarget);
 });
 document.querySelector('.nav').addEventListener('click', function (e) {
   this.style.backgroundColor = randomColor();
   console.log('NAV', e.target, e.currentTarget);
 });
 */

 ///////////////////////////////////////
// Page navigation
document.querySelectorAll('.nav__link').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('href')
    console.log(id)
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  })
});