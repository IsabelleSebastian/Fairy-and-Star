var fairy, fairyImg
var night, nightImg
var star, starImg

function preload()
{
   //preload the images here
fairyImg = loadImage("images/fairy1.png");
nightImg = loadImage("images/starnight.png");
starImg = loadImage("images/star.png");
}

function setup() {
  createCanvas(800, 750);
  night = createSprite(430,380,800,800);
  night.addImage(nightImg);
  night.scale = 0.8;

  fairy = createSprite(150,500,50,80);
  fairy.addImage(fairyImg);
  fairy.scale = 0.25;

  star = createSprite(750,60,20,20);
  star.addImage(starImg);
  star.scale = 0.2;
}


function draw() {
  background("white");

  if(keyDown(LEFT_ARROW)){
    fairy.velocityX = -7;
  } else if(keyWentUp(LEFT_ARROW)){
    fairy.velocityX = 0;
  } else if(keyDown(RIGHT_ARROW)){
    fairy.velocityX = 7;
  } else if(keyWentUp(RIGHT_ARROW)){
    fairy.velocityX = 0;
  }
  
  if(keyDown(DOWN_ARROW)){
    star.velocityY = 5;
    star.velocityX = Math.round(random(-1,-5));
  }

  fairy.setCollider("rectangle",420,-15,50,100);
  fairy.debug = false;
  
  if(star.collide(fairy)){
    star.velocityY = 0;
    star.velocityX = 0;  
  }
  drawSprites();
}
