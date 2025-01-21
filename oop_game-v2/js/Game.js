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
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(button) {
        button.disabled = true;
        const letter = button.textContent;

        if(this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        } 
    }

    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed++;

        if(this.missed === 5) {
            this.gameOver(false);
        }
    }

    checkForWin() {
        return !document.querySelectorAll('.hide').length;
    }

    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
        overlay.className = gameWon ? 'win' : 'lose';
        document.querySelector('#game-over-message').textContent = gameWon ? 'Great Job!' : 'Sorry, try again!';
    }
}

//const game = new Game();
//console.log(game.getRandomPhrase());