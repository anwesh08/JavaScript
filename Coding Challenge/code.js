// JavaScript Fundamentals - Part 1
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