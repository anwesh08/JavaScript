'use strict';

/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = '🎉 Correct Number!'
console.log(document.querySelector('.message').textContent)

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 20

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)
*/

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 15;
let highscore = 0

const displayMessgae = (msg) => {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessgae('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessgae('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessgae(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessgae('💥 You Lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 15;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  displayMessgae('Start Guessing....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
