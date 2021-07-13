var astronaut;

function preload() {
  bg = loadImage ("assets/iss.png");
  sleep = loadImage ("assets/sleep.png");
  brush = loadImage ("assets/brush.png");
  gym = loadAnimation ("assets/gym1.png", "assets/gym2.png");
  eat = loadAnimation ("assets/eat1.png", "assets/eat2.png");
  drink = loadAnimation ("assets/drink1.png", "assets/drink2.png");
  move = loadAnimation ("assets/move.png","assets/move1.png");
  bath = loadAnimation ("assets/bath1.png", "assets/bath2.png");
}

function setup() {
  createCanvas (800,400);
  createSprite (400, 200, 50, 50);
  astronaut = createSprite (300, 230)
  astronaut.addAnimation ("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  image (bg, 0, 0, width, height); 
  
  createEdgeSprites();

  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation ("brushing", brush);
    astronaut.changeAnimation ("brushing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation ("gymming", gym);
    astronaut.changeAnimation ("gymming");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation ("eating", eat);
    astronaut.changeAnimation ("eating");
    astronaut.y = 300;
    astronaut.velocityX = 5;
    astronaut.velocityY = 5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation ("bathing", bath);
    astronaut.changeAnimation ("bathing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("M")){
    astronaut.addAnimation ("moving", move);
    astronaut.changeAnimation ("moving");
    astronaut.velocityX = 5;
    astronaut.velocityY = 5;
  }

  
  drawSprites ();
}
