import startGameEngine from '../index.js';
import randomNumberGenerator from '../random.js';

const gameDescription = 'What number is missing in the progression?';

const calculateProgression = () => {
    const progression = [];
    const progressionSize = randomNumberGenerator(5, 10);
    const progressionStep = randomNumberGenerator(1, 5);
    let progressionElement = 0;

    for (let i = 0; i < progressionSize; i += 1) {
        progressionElement += progressionStep;
        progression.push(progressionElement);
    }
    return progression;
};

const prepareGameData = () => {
    const progression = calculateProgression();
    const hiddenNumber = randomNumberGenerator(1, progression.length - 2);
    const rightAnswer = String(progression[hiddenNumber]);
    progression[hiddenNumber] = '..';
    const question = progression.join(' ');
    return [question, rightAnswer];
};

const startProgression = startGameEngine(gameDescription, prepareGameData);

export default startProgression;