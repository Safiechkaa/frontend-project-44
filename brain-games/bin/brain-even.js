#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/utils.js';
const ROUND_COUNT = 3;
const runGame = () => {
    console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < ROUND_COUNT; i++) {
    const randomNumber = getRandomInt(1, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
console.log(`Let's try again, ${name}!`);
      } else {
        console.log('Correct!');
      }
    }
    console.log(`Congratulations, ${name}!`);
  }
  runGame();