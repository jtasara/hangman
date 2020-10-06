// Primitive value: string, number, boolean, null, undefined
// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

import Hangman from './hangman';
import getPuzzle from './requests';

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
// const game1 = new Hangman('Car Parts', 2)
let game1;

// puzzleEl.textContent = game1.puzzle;
// // guessesEl.textContent = game1.remainingGuesses; --> origin
// guessesEl.textContent = game1.statusMessage;

window.addEventListener('keydown', (e) => {
    if ((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 96 && e.keyCode < 123)) {
        const guess = String.fromCharCode(e.keyCode)
        game1.makeGuess(guess)
        render();
    } 
});

const render = () => {
    // puzzleEl.textContent = game1.puzzle;
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        puzzleEl.appendChild(letterEl);
    });

}

const startGame = async () => {
    const puzzle = await getPuzzle('2'); 
    game1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();
// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// });

// getCountry('CR').then((country) => {
//     console.log(country.name);
// }).catch ((err) => {
//     console.log(`Error: ${err}`)
// });

// getCurrentCountry().then((country) => {
//     console.log(country.name);
// }).catch ((err) => {
//     console.log(error);
// })

// getLocation().then((location) => {
//     return getCountry(location.country);
// }).then ((country) => {
//     console.log(country.name)
// }).catch ((err) => {
//     console.log(`Error: ${err}`)
// })