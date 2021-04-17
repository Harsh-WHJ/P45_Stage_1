var trex;
var ground1, ground2, ground3;
var obs1, obs2, obs3, obs4, obs5;

function setup() {
createCanvas(displayWidth, displayHeight);
ground1 = createSprite(250, displayHeight/4, 2500, 10);
ground1.shapeColor="brown";
ground2 = createSprite(250, displayHeight/4*2, 2500, 10);
ground2.shapeColor="brown";
ground3 = createSprite(250, displayHeight/4*3, 2500, 10);
ground3.shapeColor="brown";
}

function draw() {
  background(255,255,255);  
  drawSprites();
}