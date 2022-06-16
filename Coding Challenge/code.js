// JavaScript Fundamentals - Part 1
/*
// Coding Challenge #1 && #2

// Marks
const marksWt1 = 78
const marksWt2 = 95
const marksHt1 = 1.69
const marksHt2 = 1.88

// John
const johnWt1 = 92
const johnWt2 = 85
const johnHt1 = 1.95
const johnHt2 = 1.76

// BMI
const marksBMI1 = marksWt1 / marksHt1 ** 2
const johnBMI1 = johnWt1 / (johnHt1 * johnHt1)
console.log(marksBMI1, johnBMI1)

if (marksBMI1 > johnBMI1) {
   console.log(`Mark's BMI (${marksBMI1}) is higher than John's (${johnBMI1})!`)
} else {
   console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${marksBMI1})!`)
}



// Coding Challenge #3
/*
const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (88 + 91 + 110) / 3

if (scoreDolphins === scoreKoalas) {
   console.log('Both wins the Trophy 🏆')
} else if (scoreDolphins > scoreKoalas) {
   console.log('Dolphins win the Trophy 🏆')
} else {
   console.log('Koalas win the Trophy 🏆')
}
*/
/*

const scoreDolphins = (97 + 112 + 101) / 3
const scoreKoalas = (109 + 95 + 123) / 3
console.log(scoreDolphins, scoreKoalas)

if ((scoreDolphins === scoreKoalas) || (scoreDolphins >= 100 && scoreKoalas >= 100)) {
   console.log('Both wins the Trophy 🏆')
} else if ((scoreDolphins > scoreKoalas) && (scoreDolphins >= 100)){
   console.log('Dolphins win the Trophy 🏆')
} else if ((scoreKoalas > scoreDolphins) && (scoreKoalas >= 100)) {
   console.log('Koalas win the Trophy 🏆')
} else {
   console.log('No team wins the Trophy 🏆')
}



// Coding Challenge #4
const bill = 430
const tip = (bill <=30 && bill >= 50) ? (bill * 0.15) : (bill * 0.2)
console.log(`This was ${bill}, the tip was ${tip} and the total value ${bill + tip}`)



// JavaScript Fundamentals - Part 2
// Coding Challenge #1
const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3

// Test 1
let avgDolphins = calcAvg(44, 23, 71)
let avgKoalas = calcAvg(65, 54, 49)

const checkWinners = function (avgDolphins, avgKoalas) {
   if (avgDolphins >= (2 * avgKoalas)) {
      console.log(`Dolphins win the (${avgDolphins} vs ${avgKoalas})`)
   } else if (avgKoalas >= (2 * avgDolphins)) {
      console.log(`Koalas win the (${avgKoalas} vs ${avgDolphins})`)
   } else {
      console.log('No team wins...')
   }
}
checkWinners(avgDolphins, avgKoalas)
checkWinners(576, 111)

// Test 2
avgDolphins = calcAvg(85, 54, 41)
avgKoalas = calcAvg(23, 34, 27)
checkWinners(avgDolphins, avgKoalas)



// Coding Challenge #2
const calcTip = (bil) => (bil <= 300 && bil >= 50) ? (bil * 0.15) : (bil * 0.20)
const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]
console.log(bills, tips, totals)



// Coding Challenge #3
const mark = {
   fullName: 'Mark Miller',
   mass: 78,
   height: 1.69,
   calcBMI: function () {
      const BMI = this.mass / this.height ** 2
      return BMI
   }
}

const john = {
   fullName: 'John Smith',
   mass: 92,
   height: 1.95,
   calcBMI: function () {
      this.BMI = this.mass / this.height ** 2
      return this.BMI
   }
}

if (mark.calcBMI() < john.calcBMI) {
   console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`)
} else {
   console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`)
}



// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
const calcTip = (bill) => (bill <= 300 && bill >= 50) ? (bill * 0.15) : (bill * 0.20)
for (let index = 0; index < bills.length; index++) {
   tips.push(calcTip(bills[index]))
   totals.push(tips[index] + bills[index])
}
console.log(bills)
console.log(tips)
console.log(totals)

function calcAverage(arr) {
   let sum = 0
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
   }
   return (sum / arr.length)
}

console.log(calcAverage([2, 3, 7]))
console.log(calcAverage(totals))
console.log(calcAverage(tips))



// Data Structures, Modern Operators and Strings
// Coding Challenge #1
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//  1.
const [players1, players2] = game.players;
console.log(players1, players2);

//  2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//  3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//  4.
const finalPlayers = [...players1, "Thiago", "Coutinho", "Peristic"];

//  5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//  6.
const printGoals = function (...Players) {
  console.log(Players);
  console.log(`${Players.length} goals were scored`);
};
printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels");
printGoals("Lewandowski", "Hummels");
printGoals(...game.scored);

//  7.
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);

// Coding Challenge #2
// 1.
const goalPlayers = [...game.scored];
for (const [i, playersName] of goalPlayers.entries()) {
  console.log(`Goal ${i + 1}: ${playersName}`);
}

// 2.
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) {
  avg += odd;
}
avg /= odds.length;
console.log(avg);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Coding Challenge #3
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1.
const events = [...new Set(gameEvents.values())]
console.log(events)

// 2.
gameEvents.delete(64)
console.log(...gameEvents)

// 3.
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`)
const time = [...gameEvents.keys()].pop()
console.log(time)
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`)

// 4.
for (const [min, event] of gameEvents) {
   const half = min <= 45 ? 'First' : 'Second'
   console.log(`[${half} HALF] ${min}: ${event}`)
}



// Coding Challenge #4
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", () => {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});



// A Closer Look At Function
// Coding Challenge #1
const poll = {
  questions: "What is ur favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(prompt(
      `${this.questions}\n${this.options.join("\n")}\n(Write Option Number)`
    ));
    console.log(answer);
    //  Register Answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll result are ${this.answers.join(", ")}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]}, 'string')
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string')
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]})



// Coding Challenge #2
(function () {
   const header = document.querySelector('h1')
   header.style.color = 'red'

   document.querySelector('body').addEventListener('click', () => {
      header.style.color = 'blue'
   })
})();


// Working with Arrays
// Coding Challenge #1
const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  dogs.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
console.log("----TEST DATA 1----");
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log("----TEST DATA 2----");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);



// Coding Challenge #2
const calcAverageHumanAge = (ages) => {
  const humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + 4 * age));
  const adults = humanAge.filter((age) => age >= 18);
  console.log(humanAge);
  console.log(adults);
  return adults.reduce((acc, age) => acc + age, 0) / adults.length;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);



// Coding Challenge #3
const calcAverageHumanAges = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + 4 * age))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
const avg_1 = calcAverageHumanAges([5, 2, 4, 1, 15, 8, 3]);
const avg_2 = calcAverageHumanAges([16, 6, 10, 5, 6, 1, 4]);
console.log(avg_1, avg_2);


// Coding Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogs.recFood ? "much" : "little"
  }.`
);

// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners)
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners)
console.log(ownersEatTooMuch)
console.log(ownersEatTooLittle)

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood))

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
console.log(dogs.some(checkEatingOkay))

// 7.
console.log(dogs.filter(checkEatingOkay))

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood)
console.log(dogsSorted)




// OOPs with JavaScript
// Coding Challenge #1
const Car = function(make, speed) {
  this.make = make
  this.speed = speed
}
Car.prototype.accelerate = function() {
  this.speed += 10
  console.log(`${this.make} is going at ${this.speed} km/hr`)
}
Car.prototype.brake = function() {
  this.speed -= 5
  console.log(`${this.make} is going at ${this.speed} km/hr`)
}

const car1 = new Car('BMW', 120)
const car2 = new Car('Mercedes', 95)

car1.accelerate()
car1.accelerate()
car1.brake()
car1.accelerate()
car1.brake()




// Coding Challenge #2
class Car {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }
  accelerate() {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/hr`)
  }
  brake() {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/hr`)
  }
  get speedUS() {
    return this.speed / 1.6
  }
  set speedUS(speed) {
    this.speed = speed * 1.6
  }
}
const ford = new Car('Ford', 120)
console.log(ford.speedUS)
ford.accelerate()
ford.accelerate()
ford.brake()
ford.speedUS = 50
console.log(ford)


// Coding Challenge #3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate()
*/

// Coding Challenge #4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);

// console.log(rivian.#charge);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
