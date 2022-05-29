////////////////////////////////////
let js = "amazing";
console.log(40 + 8 + 23 - 10);

/////////////////////////////////
// Values and Variables
console.log("Anwesh");
console.log(23);

let firstName = "Anwesh";
let lastName = "Mishra";

console.log(firstName + " " + lastName);
console.log(firstName);
console.log(lastName);

// Variable name conventions
let first_name = "Jonas";
let $function = 27;

//let 3years = 3 illegal variable naming
//let new = 3 illegal variable naming as new is a reserved key word

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

//////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Anwesh");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

//////////////////////////
// let, var & const
// When we mutate a variable & want to use empty variable we use let
let age = 30;
age = 34;

// We use const when the value is constant throughtout the program
const birthYear = 2000;
// birthYear = 1990 error
// const job

var job = "programmer";
job = "teacher";

middleName = "Clark";
console.log(middleName);

//////////////////////////
// Operators
// Mathematical Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

let fName = "Anwesh";
let lName = "Mishra";
console.log(fName + " " + lName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x  - 1 = 100
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 20);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

//////////////////////////
// Operators Precedence
console.log(25 - 10 - 5);

let y, z;
y = z = 25 - 10 - 5; // x = y = 10, x = 10
console.log(y, z);

const avgAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avgAge);

////////////////////////////////////
// Strings and Template Literals
const Fname = 'Jonas'
const Job = 'Teacher'
const dob = 1991

const jonas = "I'm " + Fname + ', a ' + (now - dob) + ' years old ' + Job + '!'
console.log(jonas)

const jonasNew = `I'm ${Fname}, a ${now - dob} years old ${Job}!`
console.log(jonasNew)

console.log(`Just a regular string....`)

console.log('String with \n\
multiple \n\
lines')

console.log(`String with
Multiple
Lines`)

////////////////////////////////////
// Taking Decisions: if / else Statements
const sarahAge = 15
// const isOldEnough = sarahAge >= 18

if (sarahAge >= 18) {
   console.log('Sarah can start driving licence 🚗')
} else {
   const yearsLeft = 18 - sarahAge
   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const bornYear = 2012
let century
if (bornYear <= 2000) {
   century = 20
} else {
   century = 21
}
console.log(century)

////////////////////////////////////
// Type Conversion
const inputYear = '1991'
console.log(inputYear + 18)
console.log(Number(inputYear) + 18, inputYear)

console.log(Number('Jonas'))
console.log(typeof NaN)

console.log(String(23), 23)

// Type Coercion
console.log('I am ' + 22 + ' years old')
console.log('I am ' + '22' + ' years old')
console.log('23' - '10' - 3) // Coverts 23 & 10 to numbers and solve the arithmetic problem
console.log('23' + '10' + 3) // Concatenate the strings and also convert 3 to string
console.log('23' / '2')
console.log('23' > '18')

let n = '1' + 1
n = n - 1
console.log(n)

////////////////////////////////////
// Truthy & Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Anwesh'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100
if (money) {
   console.log("Don't spend it all")
} else {
   console.log('You should get a job!')
}

let height = 0
if (height) {
   console.log('YAY! Height is defined')
} else {
   console.log('Height is UNDEFINED')
}