import generateRandomNumber from '../utils.js';
import runGameEngine from '../gameEngine.js';

const rule = 'What number is missing in the progression?';

const PROGRESSION_LENGTH_MIN = 5;

const generateQuestion = (start, length, diff, hiddenIndex) => {
  const items = [];
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      items.push('..');
    } else {
      items.push(start + i * diff);
    }
  }
  return items.join(' ');
};

const generateRound = () => {
  const start = generateRandomNumber();
  const length = generateRandomNumber(PROGRESSION_LENGTH_MIN, 10);
  const diff = generateRandomNumber(1, 10);
  const hiddenIndex = generateRandomNumber(0, length - 1);

  const question = generateQuestion(start, length, diff, hiddenIndex);
  const answer = start + hiddenIndex * diff;

  return [question, String(answer)];
};

export default () => {
  runGameEngine(rule, generateRound);
};
