///////////////////////
// Activating Strict Mode
"use strict";

let hasDriverLicense = false;
const passTest = true;

if (passTest) {
  hasDriverLicense = true;
}
if (hasDriverLicense) {
  console.log("I can drive :D");
}

// const interface = 'Audio'
// const private = 534

///////////////////////
// Functions
function logger() {
  console.log("My name is Jonas");
}

// Calling / Running / Invoking Function
logger();
logger();
logger();

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges)
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(9, 5));

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);

///////////////////////
// Function Declaration VS Expressions
// Function Delcaration
function calcAge1(birthYear) {
  // const age = 2037 - birthYear
  // return age
  return 2037 - birthYear;
}
const personAge1 = calcAge1(1990);
// console.log(personAge1)

// Function Expression
const calcAge2 = function (birthYear) {
  // Anonymous Function
  return 2037 - birthYear;
};
const personAge2 = calcAge2(2001);

console.log(personAge1, personAge2);

///////////////////////
// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const personAge3 = calcAge3(1986);
console.log(personAge3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const personAge = 2037 - birthYear;
  const retirement = 65 - personAge;
  // return retirement
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1987, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

///////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 6;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  // console.log(apples, oranges)
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));

///////////////////////
// Reviewing Functions
/*
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////
// Introduction To Arrays
const friends = ["Jonas", "Jaddu", "Aamir"];
console.log(friends);

// const years = new Array(1991, 1998, 2001, 2009)
// console.log(years)

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Clark", 2037 - 1991, "teacher", friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age0 = calcAge(years[0])
const age1 = calcAge(years[1])
const age2 = calcAge(years[years.length - 1])
console.log(age0, age1, age2)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)

///////////////////////
// Basic Array Operations
// Add Elements
const newLength = friends.push('Aamir') // Push elements at last of the array
console.log(friends)
console.log(newLength)

friends.unshift('John') // Push elements at start of the array
console.log(friends)

// Remove Elements
friends.pop() // Remove Last Element
const popped = friends.pop() // Remove Last Element
console.log(popped)
console.log(friends)

friends.shift() // Remove First Element
console.log(friends)

console.log(friends.indexOf('Jaddu'))
console.log(friends.indexOf('Jay'))

friends.push(23)
console.log(friends.includes('Jaddu'))
console.log(friends.includes('Jay'))
console.log(friends.includes(23))

if(friends.includes('Jaddu')) {
   console.log('You have a friend called Jaddu')
}