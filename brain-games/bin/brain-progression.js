#!/usr/bin/env node

import { runGame } from '../src/index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5; // от 5 до 10
  const start = Math.floor(Math.random() * 10) + 1; // от 1 до 10
  const step = Math.floor(Math.random() * 5) + 1; // от 1 до 5
  const progression = generateProgression(start, step, progressionLength);

  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};

runGame(getQuestionAndAnswer);