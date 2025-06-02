let gameseq=[];
let userseq=[];

score=0;
let started=false;
let level=0;

let h2=document.querySelector("h2");
let btns=["red","green","yellow","purple"]



document.addEventListener("keypress", startGame); // For PC keypress

document.addEventListener("click", function (event) {
    // Check if the click is outside the game buttons to avoid interference
    if (!event.target.classList.contains("btn")) {
        startGame();
    }
});

function startGame() {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelup();
    }
}

function gameflash(btn){
  
    btn.classList.add("gameflash");
    setTimeout(function(){
        // btn.classList.toggle("flash");
        btn.classList.remove('gameflash'); 
    },300)
}

function userflash(btn){
  
    btn.classList.add("userflash");
    setTimeout(function(){
        // btn.classList.toggle("flash");
        btn.classList.remove('userflash'); 
    },300)
}

function levelup(){
    userseq=[];
   score++
    level ++;
    h2.innerText=`Level: ${level}`;
    let ranindex=Math.floor(Math.random()*4);
    let rancolor=btns[ranindex];
    let ranbtn=document.querySelector(`.${rancolor}`)
    gameflash(ranbtn);
    gameseq.push(rancolor);
    console.log(gameseq)
}

function check(indx){
  console.log(`current level :${indx}`)
  if(gameseq[indx]==userseq[indx]){
    if(gameseq.length==userseq.length){
        setTimeout(levelup,1000)
    }
    console.log(`you pass level ${level}`)
  }
  else{
    gameover();
    h2.innerText=`Game over! press any key to start the game`
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";

    },250)
    
  }
}

function btnpress(){
    console.log(this);
    btn=this;
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    userflash(btn);
    check(userseq.length-1);
}


let allbtn=document.querySelectorAll(".btn")
for(btn of allbtn){
    btn.addEventListener("click",btnpress)
}

function gameover(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];

    
}