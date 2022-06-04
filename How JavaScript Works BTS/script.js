'use strict'

/*
///////////////////////////////////////
// Scoping in Practice
function calcAge(birthYear) {
   const age = 2037 - birthYear

   function printAge() {
      let output = `${firstName}, you are ${age}, born in ${birthYear}`
      console.log(output)

      if (birthYear >= 1981 && birthYear <= 1996) {
         var millenial = true
         // Creating NEW variable with same name as outer scope's variable
         const firstName = 'Steven'
         const str = `Oh, and you're a millenial, ${firstName}`
         console.log(str)

         function add(a, b) {
            return a + b
         }

         // Reassigning outer scope's variable
         output = 'NEW OUTPUT!'
      }
      // console.log(str)
      console.log(millenial)
      // console.log(add(2, 3))
      console.log(output)
   }
   printAge()

   return age
}

const firstName = 'Anwesh'
calcAge(1991)
// console.log(age)
// printAge()

///////////////////////////////////////
// Hoisting and TDZ in Practice
// Variables
console.log(me)
// console.log(job)
// console.log(year)

var me = 'Anwesh'
let job = 'Teacher'
const year = 1991

// Functions
console.log(addDecl(2, 3))
// console.log(addExpr(2, 3))
console.log(addArrow)
// console.log(addArrow(2, 3))

function addDecl(a, b) {
   return a + b
}

const addExpr = function (a, b) {
   return a + b
}

var addArrow = (a, b) => a + b

// Example
console.log(undefined)
if(!numProducts) deleteShoppingCart()

var numProducts = 10

function deleteShoppingCart() {
   console.log('All products deleted')
}

var x = 1
let y = 2
const z = 3

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)

///////////////////////////////////////
// The this Keyword in Practice
console.log(this)

const calculateAge = function (birthYear) {
   console.log(2037 - birthYear)
   console.log(this)
}
calculateAge(1991)

const calculateAgeArrow = birthYear => {
   console.log(2037 - birthYear)
   console.log(this)
}
calculateAgeArrow(1980)

const jonas = {
   year: 1991,
   calAge: function () {
      console.log(this)
      console.log(2037 - this.year)
   }
}
jonas.calAge()

const matilda = {
   year: 2017
}

matilda.calAge = jonas.calAge
matilda.calAge()

const f = jonas.calAge
f()

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
var firstName = 'Matilda'

const jonas = {
   firstName: 'Jonas',
   year: 1991,
   calAge: function () {
      console.log(this)
      console.log(2037 - this.year)

      // Solution 1
      // const self = this // self or that
      // const isMilleneial = function () {
      // console.log(this)
      //    // console.log(this.year >= 1981 && this.year <= 1996)
      //    console.log(self.year >= 1981 && self.year <= 1996)
      // }

      // Solution 2
      const isMilleneial = () => {
      console.log(this)
         console.log(this.year >= 1981 && this.year <= 1996)
         // console.log(self.year >= 1981 && self.year <= 1996)
      }
      isMilleneial()
   },
   greet: () => {
      console.log(this)
      console.log(`Het ${this.firstName}`)
   }
}
jonas.greet()
jonas.calAge()
// console.log(this.firstName)

// ArgumentS Keyword
const addExpr = function (a, b) {
   console.log(arguments)
   return a + b
}
addExpr(2, 5)
addExpr(2, 5, 6, 7, 19)

var addArrow = (a, b) => {
   console.log(arguments)
   return a + b
}
addArrow(2, 5, 8)
*/

///////////////////////////////////////
// Objects vs. primitives
let age = 30
let oldAge = age
age = 31
console.log(age)
console.log(oldAge)

const me = {
   name: 'Jonas',
   age: 30
}

const friend = me
friend.age = 27

console.log('Friend : ', friend)
console.log('Me : ', me)