// Create a method for making a guess
// 1. Should accept a character for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match
// 4. Disable new guesses unless 'playing'
// 5. Setup a new method to get back a status message
// Playing -> Guesses left: 3
// Failed -> Nice try! The word was "Cat"
// Finished -> Great work! Your guessed the word

class Hangman {
    constructor (paramWord, paramRemainingGuesses) {
        this.word = paramWord.toLowerCase().split('');
        this.remainingGuesses = paramRemainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    calculateStatus() {
        const finished = this.word.every((letter) => 
            this.guessedLetters.includes(letter) || letter === ' ');

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word "${this.word.join('')}"`
        } else {
            return 'Great work! You guessed the work.'
        }
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if (this.status !== 'playing') {
            return
        }
        if (isUnique) {
            // this.guessedLetters.push(guess)
            this.guessedLetters = [...this.guessedLetters, guess]
        }
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
    
        this.calculateStatus()
    }
}

// console.log(game1.getPuzzle());
// console.log(game1.remainingGuesses)

export { Hangman as default }