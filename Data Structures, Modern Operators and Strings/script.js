'use strict';

///////////////////////////////////////
// Destructuring Arrays
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

///////////////////////////////////////
// The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, but not objects
const str = 'Anwesh';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str}`)

// Real World Example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients)

// Objects
const newRestaurant = { foundedIn: 1951, ...restaurant, founder: 'Anwesh' };
console.log(newRestaurant)

const restaurantCopy = {...restaurant}
restaurantCopy.name = 'Ristorante Roma'
console.log(restaurantCopy.name, restaurant.name)

/*
///////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
   address: 'Via del Sole, 21',
   starterIndex: 1
})
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj)
// console.log(a, b)

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

///////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4]
const a = arr[0]
const b = arr[0]
const c = arr[0]

const [x, y, z] = arr
console.log(x, y, z)
console.log(arr)

let [main, , , secondary] = restaurant.categories
console.log(main, secondary)


// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary) 

// [main, secondary] = [secondary, main]
// console.log(main, secondary)

// Receive 2 return values from a function
// console.log(restaurant.order(2, 0))
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse)

// Nested Destructuring
const nested = [2, 4, [5, 6]]
// const [i, , j] = nested
const [i, , [j, k]] = nested
console.log(i, j, k)

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r)
*/
