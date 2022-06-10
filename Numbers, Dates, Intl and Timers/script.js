'use strict'

///////////////////////////////////////
// Converting and Checking Numbers
console.log(23 === 23.0)

// Base 10 - 0 to 9
// Binary Base 2 - 0 & 1
console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)

// Conversion
console.log(Number(23))
console.log(+'23')

// Parsing
console.log(Number.parseInt('30px', 10))
console.log(Number.parseInt('px23', 10))

console.log(Number.parseInt('2.5rem', 10))
console.log(Number.parseFloat('2.5rem', 10))

console.log(parseFloat(' 2.5rem '))

// Check if value is NaN
console.log(Number.isNaN(20))
console.log(Number.isNaN('20'))
console.log(Number.isNaN(+'20X'))
console.log(Number.isNaN(23 / 0))

// Checking if value is number
console.log(Number.isFinite(20))
console.log(Number.isFinite('20'))
console.log(Number.isFinite(+'20X'))
console.log(Number.isFinite(20 / 0))

// Check if a number is interger
console.log(Number.isInteger(23))
console.log(Number.isInteger(23.0))
console.log(Number.isInteger(23 / 0))

///////////////////////////////////////
// Math and Rounding
console.log(Math.sqrt(25))
console.log(25 ** (1 / 2))
console.log(8 ** (1 / 3))

console.log(Math.max(5, 18, 23, 11, 2))
console.log(Math.max(5, 18, '23', 11, 2))
console.log(Math.max(5, 18, '23px', 11, 2))

console.log(Math.min(5, 18, 23, 11, 2))

console.log(Math.PI * Number.parseFloat('10px') ** 2)

console.log(Math.trunc(Math.random() * 6) + 1)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min
// 0...1 -> 0...(max - min) -> min..max
console.log(randomInt(10, 20))

// Rounding integers
console.log(Math.trunc(23.3))

console.log(Math.round(23.3))
console.log(Math.round(23.9))

console.log(Math.ceil(23.3))
console.log(Math.ceil(23.9))

console.log(Math.floor(23.3))
console.log(Math.floor(23.9))

console.log(Math.trunc(-23.3))
console.log(Math.floor(-23.3))

// Floating decimals
console.log((2.7).toFixed(0))
console.log((2.7).toFixed(3))
console.log((2.567).toFixed(2))
console.log(+(2.567).toFixed(2))