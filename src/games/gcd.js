import randomNumberGenerator from '../random.js';
import startGameEngine from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const NODing = (fistnumber, secondnumber) => {
  if (secondnumber === 0) {
    return fistnumber;
  }
  if (secondnumber > fistnumber) {
    return NODing(secondnumber, fistnumber);
  }
  return NODing(secondnumber, fistnumber % secondnumber);
};
const prepareGameData = () => {
  const fistnumber = randomNumberGenerator(0, 100);
  const secondnumber = randomNumberGenerator(0, 100);
  const question = `${fistnumber} ${secondnumber}`;
  const rightAnswer = `${NODing(fistnumber, secondnumber)}`;
  return [question, rightAnswer];
};

const startgcd = startGameEngine(gameDescription, prepareGameData);
export default startgcd;
