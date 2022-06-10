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

///////////////////////////////////////
// The Remainder Operator
console.log(5 % 2)
console.log(5 / 2) // 5 = 2 * 2 + 1

console.log(8 % 3)
console.log(8 / 3) // 8 = 2 * 3 + 2

console.log(6 % 2)
console.log(6 / 2) // 6 = 3 * 2

console.log(7 % 2)
console.log(7 / 2) // 7 = 3 * 2 + 1

const isEven = n => n % 2 === 0
console.log(isEven(8))
console.log(isEven(23))
console.log(isEven(514))

// labelBalance.addEventListener('click', e => {
//    [...document.querySelectorAll('.movements__row')].forEach( (row, i) => {
//      if (i % 2 === 0) row.style.backgroundColor = 'orangered'
//      if (i % 3 === 0) row.style.backgroundColor = 'blue'
//    })
//  })

///////////////////////////////////////
// Numeric Separators
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 34_599;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000'));
console.log(parseInt('230_000'));

///////////////////////////////////////
// Working with BigInt
console.log(2 ** 53 - 1)
console.log(Number.MAX_SAFE_INTEGER)
console.log(2 ** 53 + 1)
console.log(2 ** 53 + 2)
console.log(2 ** 53 + 3)
console.log(2 ** 53 + 4)

console.log(6578389293829824895959893847343949n)
console.log(BigInt(65783892938298248959))

// Operations
console.log(10000n + 10000n)
console.log(2378940374940383920284n * 100000n)
// console.log(Math.sqrt(16n))

const huge = 287483478374834934848785738n
const num = 23
// console.log(huge * num)
console.log(huge * BigInt(num))

// Exceptions
console.log(20n > 15)
console.log(20n === 20)
console.log(typeof 20n)
console.log(20n == 20)

console.log(huge + ' is REALLY big!!!')

// Divisons
console.log(12n / 3n)
console.log(10 / 3)

///////////////////////////////////////
// Creating Dates
// Create a Date
const now = new Date()
console.log(now)

console.log(new Date('Jun 10 2022 10:59:21'))
console.log(new Date('January 8, 2022'))

console.log(new Date(2037, 10, 19, 15, 23, 5))
console.log(new Date(2037, 10, 33))

console.log(new Date(0))
console.log(new Date(3 * 24 * 60 * 60 * 1000))

// Working with dates
const future = new Date(2037, 10, 19, 15, 23)
console.log(future)
console.log(future.getFullYear())
console.log(future.getMonth())
console.log(future.getDate())
console.log(future.getDay())
console.log(future.getHours())
console.log(future.getMinutes())
console.log(future.getSeconds())
console.log(future.toISOString())
console.log(future.getTime())

console.log(new Date(2142237180000))

console.log(Date.now())

future.setFullYear(2040)
console.log(future)

///////////////////////////////////////
// Operations With Dates
console.log(+(future))

const daysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)

const days1 = daysPassed(new Date(2037, 3 , 14), new Date(2037, 3, 24))
console.log(days1)