let game

//start game button listener
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

//listens for a keyboard click
document.getElementById('qwerty').addEventListener('click', (e) => {
    if(e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
});

function resetGame() {
    document.querySelector('#phrase ul').innerHTML = '';

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.disabled = false;
        key.className = 'key';
    });
    
    //reset the hearts in the game
    const hearts = document.querySelectorAll('.tries img');
    hearts.forEach(heart => {
        heart.src = 'images/liveHeart.png';
    });
}

document.getElementById('btn__reset').addEventListener('click', () => {
    resetGame();
    game = new Game();
    game.startGame();
});

//adds functionality for extra cred point - having the keyboard interact with the game
document.addEventListener('keyup', (e) => {
    //will only run if the game is in progress (overlay is gone)
    if(game && document.getElementById('overlay').style.display === 'none') {
        const keyboardButtons = document.querySelectorAll('.key');

        const buttonPressed = Array.from(keyboardButtons).find(button => 
            button.textContent === e.key.toLowerCase() &&
            !button.disabled
        );

        if (buttonPressed) {
            game.handleInteraction(buttonPressed)
        }
    }
})