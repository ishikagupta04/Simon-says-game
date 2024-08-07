let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","purple","green"];
let started =false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");
let p = document.querySelector("#highscore");

document.addEventListener("keypress", function(){
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }

});

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp(){
  userSeq =[];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  btnFlash(randBtn);
}

function checkAns(idx) {
  
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000);
    }
  } else{
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundcolor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundcolor = "white";
    },150);
    gethighScore();
    reset();
  }
}

function btnPress(){
  console.log(this);
  let btn = this;
  btnFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset() {
  started = false;
  gameSeq =[];
  userSeq =[];
  level = 0;
}
 function gethighScore(idx){
  if ( `${level}` > highScore){
    highScore = `${level}`;
    p.innerText =`High score : ${level}`;
    console.log("showhighscor");
  }

 }