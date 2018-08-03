let question = prompt("What is your question");

let message = "";

function roll() {
    let eightBall = Math.floor(Math.random() * 8);
    if (eightBall === 0) {
        message = "It is certain";
    } else if (eightBall === 1) {
        message = "It is decidedly so";
    } else if (eightBall === 2) {
        message = "Ask again later";
    } else if (eightBall === 3) {
        message = "Reply hazy, try again";
    } else if (eightBall === 4) {
        message = "Cannot predict at this moment";
    } else if (eightBall === 5) {
        message = "My sources say no";
    } else if (eightBall === 6) {
        message = "Outlook not so good";
    } else if (eightBall === 7) {
        message = "Don't count on it";
    } else {
        message = "Please try again later";
    }
    document.getElementById("answer").innerHTML = message;
}

document.getElementById("question").innerHTML = question;

document.getElementById("btn").addEventListener("click", roll);
