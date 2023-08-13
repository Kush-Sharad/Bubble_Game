/* In this game you have to click the bubble that is numbered on hit ...by clicking right bubble you get +10 score...
    It is 1 minute game */

var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble(){      //Function is creating bubble by random number
    var clutter = "";
    for(var i=1; i<=85; i++){
        var num=Math.floor(Math.random()*10);   /*Random function generates a random number int floating point */
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector('.pbottom').innerHTML=clutter;
}

function getNewHit(){                                
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#Hitval").textContent=hitrn;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector('.pbottom').innerHTML=`<h1>GAME OVER!</h1>`;    //When the timer will be zero ....it will display that game is over.
        }

    }, 1000);
}

getNewHit();
runTimer();
makeBubble();
document.querySelector('.pbottom').addEventListener("click",function(dets){     //we are clicking on bubble ...and dets is giving
    var clickednum = Number(dets.target.textContent);                        // the details of content of bubble...if it is equal 
    if(clickednum === hitrn){                                             //to the hit ....then increse the score by 10.
        increaseScore(); 
        makeBubble();
        getNewHit();
    }
});
 