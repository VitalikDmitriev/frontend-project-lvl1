import generateRandomNumber from '../utils.js';
import runGameEngine from '../gameEngine.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const generateRound = () => {
  const number = generateRandomNumber();
  const answer = isEven(number) ? 'yes' : 'no';
  return [String(number), answer];
};

export default () => {
  runGameEngine(rule, generateRound);
};
