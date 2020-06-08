
var fixedrectangle,movingrectangle,xrectangle



function setup() {
  createCanvas(800,400);
fixedrectangle=createSprite(400, 200, 50, 50);
movingrectangle=createSprite(600, 200, 80, 30);
fixedrectangle.velocityY=4
movingrectangle.velocityX=-4
xrectangle=createSprite(400,400,50,50)
xrectangle.velocityY=-3
}


function draw() {
  background(0);
 bouncingoff(fixedrectangle,xrectangle)

  drawSprites();
}
