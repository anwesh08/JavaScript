'use strict';

/////////////////////////////////////////////////
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2))
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

///////////////////////////////////////
// The new at Method
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));
// getting last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));
console.log('jonas'.at(0));
console.log('jonas'.at(-1));

///////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('----FOR OF----');
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('----FOR EACH----');
movements.forEach((movement, index) => {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdraw ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

///////////////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _) => {
  console.log(`${value}: ${value}`);
});

///////////////////////////////////////
// The map Method
const euroToUSD = 1.1;

// const movementsUSD = movements.map( (mov) => {
//   return Math.trunc(mov * euroToUSD)
// })

const movementsUSD = movements.map(mov => Math.trunc(mov * euroToUSD));

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(Math.trunc(mov * euroToUSD));
}
console.log(movementsUSDfor);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrawal'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescription);

///////////////////////////////////////
// The filter Method
const deposits = movements.filter(mov => {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

///////////////////////////////////////
// The reduce Method
console.log(movements);
// Accumulator -> SNOWBALL
const balance = movements.reduce((acc, cur, i) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

let sum = 0;
for (const [i, mov] of movements.entries()) {
  console.log(`Iteration ${i}: ${sum}`);
  sum += mov;
}
console.log(sum);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);

///////////////////////////////////////
// The Magic of Chaining Methods
// Pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * euroToUSD)
  .map((mov, i, arr) => {
    console.log(arr)
    return mov * euroToUSD
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD)

///////////////////////////////////////
// The find Method
const firstWithdrawal = movements.find(mov => mov < 0)
console.log(firstWithdrawal)

///////////////////////////////////////
// Some and Every
console.log(movements)

// Equality
console.log(movements.includes(-130))

// SOME: Condition
console.log(movements.some(mov => mov === -130))

const anyDeposits = movements.some(mov => mov > 0)
console.log(anyDeposits)

// EVERY
console.log(movements.every(mov => mov > 0))

// Separate Callback
const deposit = mov => mov < 0
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))

///////////////////////////////////////
// Flat and FlatMap
const array = [[1, 2, 3], [4, 5, 6], 7, 8]
console.log(array.flat())

const arrayDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
console.log(arrayDeep.flat(2))

// flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

///////////////////////////////////////
// Sorting Arrays
const owners = ['Jonas', 'Jack', 'Adam', 'Martha']
console.log(owners.sort())
console.log(owners)

// Numbers
console.log(movements)
// console.log(movements.sort())

// return < 0  (A, B) (Keep Order)
// return > 0  (B, A) (Switch Order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1
//   }
//   if (a < b) {
//     return -1
//   }
// })
movements.sort((a, b) => a - b)
console.log(movements)

// Descending
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1
//   }
//   if (a < b) {
//     return 1
//   }
// })
movements.sort((a, b) => b - a)
console.log(movements)

///////////////////////////////////////
// More Ways of Creating and Filling Arrays
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9))

// Empty Arrays + fill method
const x = new Array(7)
console.log(x)
console.log(x.map(() => 5))

x.fill(4, 2, 6)
console.log(x)

// Array.from
const y = Array.from({length: 7}, () => 1)
console.log(y)

const z = Array.from({length: 7}, (_, i) => i + 1)
console.log(z)

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// labelBalance.addEventListener('click', () => {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('???', ''))
//   );
//   console.log(movementsUI)
// });