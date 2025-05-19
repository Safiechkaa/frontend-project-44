#!/usr/bin/env node

import { runGame } from '../src/index.js';

const getGCD = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const getQuestion = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGCD(num1, num2));
  return [question, correctAnswer];
};

const runGCDGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  runGame(getQuestion);
};

runGCDGame();