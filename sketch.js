var fixedRect, movingRect;
var r1,r2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  r1 = createSprite(100, 500,80,30);
  r1.shapeColor = "green";
  r1.debug = true;

  r2 = createSprite(300, 500,80,30);
  r2.shapeColor = "green";
  r2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  r1.x=World.mouseX
  r1.y=World.mouseY;
bounceOff(fixedRect,movingRect);
 if(isTouching(r1,r2)){
  r1.shapeColor="Blue";
  r2.shapeColor="Blue";
 }
 else{
  r1.shapeColor="red";
  r2.shapeColor="red";
    }
  drawSprites();
}
