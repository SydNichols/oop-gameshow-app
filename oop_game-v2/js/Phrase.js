/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
    
// This sets up the phrase
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

// Spaces between words are handled differently than letters
    addPhraseToDisplay() {
        const phraseDiv = document.querySelector('#phrase ul');

             //creates a new box for each letter
            this.phrase.split('').forEach(letter => {
                const li = document.createElement('li');

                if(letter === ' ') {
                    li.className = 'space';
                    li.textContent = ' ';
                } else {
                    li.className = `hide letter ${letter}`;
                    li.textContent = letter;
                }

                phraseDiv.appendChild(li);
            });
    }

    //checks if the letter is in the phrase
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter) {
        const letters = document.querySelectorAll(`.letter.${letter}`);
        letters.forEach(item => {
            item.classList.remove('hide');
            item.classList.add('show');
        });
    }
}

//const phrase = new Phrase('Hello World');
//console.log(phrase.phrase);
//console.log(phrase.checkLetter('h'));
//console.log(phrase.checkLetter('z'));