import randomNumberGenerator from '../random.js';
import startGameEngine from '../index.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculate = (fistnumber, operator, secondnumber) => {
  switch (operator) {
    case '+':
      return fistnumber + secondnumber;
    case '-':
      return fistnumber - secondnumber;
    case '*':
      return fistnumber * secondnumber;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const prepareGameData = () => {
  const fistnumber = randomNumberGenerator(0, 10);
  const secondnumber = randomNumberGenerator(0, 10);
  const randomOperator = operators[randomNumberGenerator(0, operators.length - 1)];
  const question = `${fistnumber} ${randomOperator} ${secondnumber}`;
  const rightAnswer = String(calculate(fistnumber, randomOperator, secondnumber));
  return [question, rightAnswer];
};

const startCalc = startGameEngine(gameDescription, prepareGameData);

export default startCalc;
