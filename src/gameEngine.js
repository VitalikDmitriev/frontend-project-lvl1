import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export default (rule, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);

  console.log(rule);
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, answerCorrect] = generateRound();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== answerCorrect) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${answerCorrect}".`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};
