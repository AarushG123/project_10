var ground
var ship, ship_moving
var groundImage
function preload(){
  groundImage = loadAnimation("sea.png")
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  

}

function setup(){
  createCanvas(400,400);
  ground = createSprite(200,200)
  ground.addImage("ground",groundImage)
  ground.scale = 1

  ship = createSprite(100,200)
  ship.addImage("ship",ship_moving)
  ship.scale = 0.5
  
  
}

function draw() {
  background("blue");
  ground.velocityX = 2
  if (ground.x < 0){
    ground.x = ground.width/2
  }
 
}