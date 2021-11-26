var retFixo, retMovendo;

function setup() {
  createCanvas(1200,800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retFixo.velocityX = -2;
  retFixo.velocityY = -2;
  retMovendo = createSprite(400,200,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
  retMovendo.velocityX = 2;
  retMovendo.velocityY = 2;
}

function draw() {
  background(0,0,0);  
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;
  if(isTouching(retMovendo,retFixo)){ 
    retMovendo.shapeColor = "red";
    retFixo.shapeColor = "red"; 
  }
  else{ 
    retMovendo.shapeColor = "green"; 
    retFixo.shapeColor = "green"; 
  }
 bounceOff(retMovendo,retFixo);
  drawSprites();
}

