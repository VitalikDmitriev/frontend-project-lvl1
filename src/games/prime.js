import startGameEngine from '../index.js';
import randomNumberGenerator from '../random.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const prepareGameData = () => {
  const randomNumber = randomNumberGenerator(1, 100);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};

const startPrime = startGameEngine(gameDescription, prepareGameData);

export default startPrime;
