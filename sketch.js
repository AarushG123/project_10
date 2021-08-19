var ground
var ship, ship_moving
var groundImage
function preload(){
  groundImage = loadImage("sea.png")
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  

}

function setup(){
  createCanvas(400,400);
  ground = createSprite(200,200)
  ground.addImage("ground",groundImage)
  ground.scale = 0.6
  ground.velocityX = -2
  ship = createSprite(100,200)
  ship.addAnimation("ship",ship_moving)
  ship.scale = 0.3
  
  
}

function draw() {
  background("blue");
  
  if (ground.x < 200){
    ground.x = 400
    

  }
drawSprites();
 
}