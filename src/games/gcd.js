import generateRandomNumber from '../utils.js';
import runGameEngine from '../gameEngine.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRound = () => {
  const a = generateRandomNumber(1, 100);
  const b = generateRandomNumber(1, 100);
  return [`${a} ${b}`, String(getGcd(a, b))];
};

export default () => {
  runGameEngine(rule, generateRound);
};
