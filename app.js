let timer = 60;
let score = 0;
let hitRanNum = 0;
let clickedNum;
let restart = document.getElementById("restart");

const increaseScore = () => {
  score += 1;
  document.getElementById("scoreVal").textContent = score;
};

const getNewHit = () => {
  hitRanNum = Math.floor(Math.random() * 10);
  document.getElementById("hitVal").textContent = hitRanNum;
};

const makeBubble = () => {
  let clutter = "";
  for (let i = 1; i <= 90; i++) {
    let ranNum = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${ranNum}</div>`;
  }

  document.getElementById("pBtm").innerHTML = clutter;
};

const runTimer = () => {
  let timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.getElementById("timeValue").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.getElementById(
        "pBtm"
      ).innerHTML = `<h1>Game Over! ${score}</h1>`;
    }
  }, 1000);
};

document.getElementById("pBtm").addEventListener("click", (details) => {
  clickedNum = Number(details.target.textContent);
  if (hitRanNum === clickedNum) {
    increaseScore();
    getNewHit();
    makeBubble();
  }
});
runTimer(); 
makeBubble();
getNewHit();
