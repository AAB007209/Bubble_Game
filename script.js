var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    if (timer < 60 && timer > 0) {
        score += 10;
        document.querySelector("#scoreVal").textContent = score;
    }
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
    var clutter = '';

    for (var i = 1; i <= 119; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerset = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else {
            clearInterval(timerset);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over...! Your Score = ${score}</h1>`;
        }
    }, 1000)
}

//, Event Bubbling Concept
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (hitrn == clickedNum) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

const startBtn = document.querySelector("#btnStart");

startBtn.addEventListener("click", function () {
    runTimer();
    startBtn.disabled = true;
});

makeBubble();
getNewHit();

document.querySelector("#btnRestart").addEventListener("click", function () {
    if (timer == 0) {
        timer = 60;
        score = 0;
        location.reload();
    }
});