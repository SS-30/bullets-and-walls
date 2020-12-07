var thickness,wall
var bullet,speed,weight
function setup() {
  createCanvas(1200,800);
    
  weight=Math.round(random(30,52))
  speed=Math.round(random(223,321))
  thickness=Math.round(random(22,83))
  bullet=createSprite(600, 400, 50, 50);
  bullet.velocityX=speed
  wall=createSprite(1200,400,thickness,height/2)
}

function draw() {
  background("black");

  if(rect.x-wall.x>rect.width/2+wall.width/2){
    damage=0.5*weight*speed*speed/thickness*thickness*thickness
     bullet.velocityX=0
     if(deformation<7){
       bullet.shapeColor="green"
     }
     else{
       bullet.shapeColor="red"
     }
  }
  drawSprites();
}