'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //WHEN THERE IS NO INPUT
    if (!guess) {
        displayMessage('No Number Entered!🤔');

        //WHEN PLAYER WINS
    } else if (guess === secretnumber) {
        displayMessage('Correct Guess😱!!');
        document.querySelector('.number').textContent = secretnumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30 rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    //WHEN THE GUESS IS WRONG
    else if (guess !== secretnumber) {
        if (score > 1) {

            displayMessage(guess > secretnumber ? '😶 Too High ⬆' : '😶 Too Low ⬇');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('YOU LOSE 👎');
            document.querySelector('.score').textContent = 0
        }
    }
    // // WHEN GUESS IS TOO HIGH
    // else if (guess > secretnumber) {
    //     if (score > 1) {

    //         document.querySelector('.message').textContent = '😶 Too High ⬆';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'YOU LOSE 👎';
    //         document.querySelector('.score').textContent = 0
    //     }
    // }
    // //WHEN GUESS IS TOO LOW
    // else if (guess < secretnumber) {
    //     document.querySelector('.message').textContent = '😶 Too Low ⬇';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // }
});






document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    // displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});