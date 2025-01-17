/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Life is Good'),
            new Phrase('Hello World'),
            new Phrase('Happy Coding'),
            new Phrase('Always Learning'),
            new Phrase('Gone Fishing')
        ];
        this.activePhrase = null;
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhrasetoDisplay();
    }
}

const game = new Game();
console.log(game.getRandomPhrase());