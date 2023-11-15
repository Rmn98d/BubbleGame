let timer = 60;
let hitVal =0;
let score = 0;



function Score(){
    score += 10;
    document.querySelector('#score').textContent=score;
    console.log(score);
}

function Bubbles(){
    let bubbles ="";
    for(let i = 0; i <= 160; i++){
    let randomNum = Math.floor(Math.random()*10);
    bubbles += `<div class="bubbles">${randomNum}</div>`;
}
document.querySelector('.bubbleBottom').innerHTML=bubbles;

}

function HitVal(){
     hitVal = Math.floor(Math.random() * 10);
    document.querySelector('#hitVal').textContent=hitVal;
}

function Timer(){
let timeInterval = setInterval(() => {
if(timer>0){
timer--;
document.querySelector("#timer").textContent = timer;
}else{
    clearInterval(timeInterval);
    document.querySelector(".bubbleBottom").innerHTML = "game over";

}
}, 1000);
}


document.querySelector(".bubbleBottom")
.addEventListener("click",function(dets){
  let clickVal = Number(dets.target.textContent);
  console.log(clickVal);
    if(hitVal === clickVal){
    Score();   
    Bubbles();
    Timer();
    HitVal();
    }else{
document.querySelector(".bubbleBottom").innerHTML = "Game Over";

    }
}) ;



Bubbles();
Timer();
HitVal();








