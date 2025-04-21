#!/usr/bin/env node

import { runGame } from '../src/index.js';

const getQuestion = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
  }
  
  const question = `${num1} ${operator} ${num2}`;
  return [question, String(correctAnswer)];
};

const runCalcGame = () => {
  runGame(getQuestion);
};

runCalcGame();

