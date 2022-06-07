'use strict'

/*
///////////////////////////////////////
// Default Parameters
const bookings = []

const createBooking = function (
   flightNum, 
   numPassenger = 1, 
   price = 199 * numPassenger
) {
   // numPassenger = numPassenger || 1
   // price = price || 199
   const booking = {
      flightNum,
      numPassenger,
      price
   }
   console.log(booking)
   bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', 2)
createBooking('LH123', 5)

createBooking('LH123', undefined, 1000)

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234'
const anwesh = {
   name: 'Anwesh Mishra',
   passport: 25479302720
}

const checkIn = function (flightNum, passenger) {
   flightNum = 'LH99'
   passenger.name = 'Mr.' + passenger.name
   if (passenger.passport === 25479302720) {
      alert('Checked In')
   } else {
      alert('Wrong Passport!')
   }
}

// checkIn(flight, anwesh)
// console.log(flight)
// console.log(anwesh)

// Is the same as doing...
// const flightNum = flight
// const passenger = anwesh

const newPassport = function(person) {
   person.passport = Math.trunc(Math.random() * 1000000000)
}

newPassport(anwesh)
checkIn(flight, anwesh)

///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
   return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function (str) {
   const [first, ...others] = str.split(' ')
   return [first.toUpperCase(), ...others].join(' ')
}

// Higher-Order Function
const transform = function (str, fn) {
   console.log(`Original String: ${str}`)
   console.log(`Transformed String: ${fn(str)}`)
   console.log(`Transformed By: ${fn.name}`)
}

transform('JavaScript is the best!', upperFirstWord)

transform('JavaScript is the best!', oneWord)

// JS uses callbacks all the time
const high5 = () => {
   console.log('👋')
}

document.body.addEventListener('click', high5)

// ['Jonas', 'Martha', 'Adam'].foreach(high5)
*/

///////////////////////////////////////
// Functions Returning Functions
const greet = function (greeting) {
   return function (name) {
      console.log(`${greeting} ${name}`)
   }
}

// const greet = (greeting) => {
//    return (name) => {
//       console.log(`${greeting} ${name}`)
//    }
// }

const greetHey = greet('Hey')
greetHey('Jonas')
greetHey('Steven')

greet('Hello')('Jonas')

const greetArr = greeting => name => console.log(`${greeting} ${name}`)
greetArr('Hello')('Jonas')