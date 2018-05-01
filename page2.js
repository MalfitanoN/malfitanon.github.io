
//player1
var x1 = 525
var y1 = 200

var score1 = 0

var missileX = null
var missileY = null

//player2
var x2 = 175
var y2 = 200

var score2 = 0

var missile2X = null
var missile2Y = null

var playerUno
var playerDos



function random(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min)
}

function preload() {
  bg = loadImage("pics/2.jpg")
  player1 = loadImage("pics/player1.png")
  player2 = loadImage("pics/player2.png")
 
}

function setup() {
    var canvas = createCanvas(700, 400);
    canvas.parent('gamecontainer');
}

 function submitName1(){
        playerUno = document.getElementById("name1").value
    }
    
    function submitName2(){
        playerDos = document.getElementById("name2").value
    }

function draw(){
    background(bg);
    image(player1, x1, y1, 40, 40)
    
    
     if(keyIsDown(LEFT_ARROW)){
        x1-= 3
     }
    if(keyIsDown(RIGHT_ARROW)){
        x1+= 3
     }
    
    if(keyIsDown(UP_ARROW)){
        y1-= 3
     }
    if(keyIsDown(DOWN_ARROW)){
        y1+= 3
     }
    
    if (missileX != null) {
        missileX -= 15
        //7
        rect(missileX, missileY, 10, 5);
    }
    
    if(keyCode === 77 && missileX === null && missileY === null){
        missileX = x1
        missileY = y1+17
        fill("red")
        
     }
    
    //missle reset p1
    if(missileX <= 0){
        missileX = null
        missileY = null
    }
    
    if(x1 >= 660){
        x1 = 660
    }
    
    if(x1 <= 350){
        x1 = 350
    }
    
    if(y1 <= 0){
        y1 = 0
    }
    
    if(y1 >= 360){
        y1 = 360
    }
    
    fill("red")
    rect(347, 0, 3, 400)
    
    
    
    image(player2, x2, y2, 40, 40)
    
    
     if(keyIsDown(65)){
        x2-= 3
     }
    if(keyIsDown(68)){
        x2+= 3
     }
    
    if(keyIsDown(87)){
        y2-= 3
     }
    if(keyIsDown(83)){
        y2+= 3
     }
    
    if (missile2X != null) {
        missile2X += 15
        //7
        rect(missile2X, missile2Y, 10, 5);
    }
    
    if(keyCode === 81 && missile2X === null && missile2Y === null){
        missile2X = x2+24
        missile2Y = y2+17
        fill("red")
        
     }
    
    //missle reset p2
    if(missile2X >= 700){
        missile2X = null
        missile2Y = null
    }
    
    if(x2 <= 0){
        x2 = 0
    }
    if(x2 >= 307){
        x2 = 307
    }
    if(y2 <= 0){
        y2 = 0
    }
    
    if(y2 >= 360){
        y2 = 360
    }
    
    
    if(missileX > x2 && missileX < x2+25 && missileY > y2 && missileY < y2+40){
        missileX = 0
        score1++
        document.getElementById("score1").innerHTML = playerUno + " score: " + score1
        
    }
    
        if(missile2X > x1 && missile2X < x1+25 && missile2Y > y1 && missile2Y < y1+40){
        missile2X = 700
        score2++
        document.getElementById("score2").innerHTML = playerDos + " score: " + score2
        
    }
}

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
