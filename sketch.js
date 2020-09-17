var bullet,wall;
var spped,weight;
var thickness;


function setup() {

speed = random(223,321);
weight = random(30,52);

  createCanvas(1600,400);
 bullet = createSprite(50, 200, 25, 10);
 bullet.shapecolor=(white);
 bullet.velocityX=speed;

 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor(80,80,80);

thickness=random(22,83);
}

function draw() {
  background(255,255,255);  

if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{

bullet.velocityX=0;

var deformation =0.5*weight*speed*speed/22509;
if(deformaation < 180 ){
  bullet.shapeColor=color(255,0,0)
}

if(deformation<100 && deformation>100){
  bullet.shapeColor=color(230,230,0);
}

if(deformation<100){
  bullet.shapeColor=(0,255,0)
}


}

if (hasCollided(bullet,wall)){
  bullet.veocity=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness;)
  
  if(damage>10)
{
  wall.shapeColor=color(225,0,0);
}
if(damage<10){
  wall.shapeColor=color(225,0,0);
}

}



  drawSprites();
}

function hasCollided(Lbullet,Lwall){

bulletRightEdge=Lbullet.x+Lbullet.width;
wallLeftEdge=Lwall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}



