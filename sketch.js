var fixedRect, movingRect, o1, o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
  o1 = createSprite(800, 800,80,30);
  o2 = createSprite(800, 100,80,30);

  o1.velocityY = -5;
  o2.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect);
  bounceOff(o1, o2);

  drawSprites();
}
