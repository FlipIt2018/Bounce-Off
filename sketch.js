var fixedRect, movingRect,gameObj1,gameObj2;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  gameObj1=createSprite(600,50,50,50);
  gameObj2=createSprite(600,200,50,50);
  movingRect=createSprite(200,200,50,50);

  gameObj1.velocityX = 0;
  gameObj1.velocityY= 2;
}      

function draw() {
  background(0);  

  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  
 


  bounceOff(gameObj1,gameObj2);

  drawSprites();
}


function bounceOff(object1,object2){
if (object1.x-object2.x < object1.width/2+object2.width/2
&& object2.x-object1.x < object1.width/2+object2.width/2){
object1.velocityX = object1.veloctiyX * (-1);
object2.velocityX = object2.velocityX * (-1);

}
if (object1.y-object2.y < object1.height/2+object2.height/2
&& object2.y-object1.y < object2.height/2+object1.height/2){
object1.velocityY = object1.velocityY * (-1);
object2.velocityY = object2.velocityY * (-1);
}
}
