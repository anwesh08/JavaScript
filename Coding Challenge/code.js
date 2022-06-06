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
*/

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