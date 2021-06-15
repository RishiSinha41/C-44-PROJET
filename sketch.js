var PLAY=1
var END=0
var gameState=PLAY
var ground,groundImage,InvisibleGround
var girl,girlRunning,girlCollided,girlImage
var zombie,zombieRunning,zombieAttacks
var obstaclesGroup,obstacles1,obstacles2,obstacles3,obstacles4
var score=0
var gameOver,restart,gameOverImage,restartImage
var jumpSound,dieSound,checkPointSound
function preload(){

}

function setup() {
 createCanvas(600,500);
  

}

function draw() {
 background("black");
  
 
 
  
 
  drawSprites();
  fill("lightpink");
  textSize(20);
   text("Score: "+ score, 500,50);
}

