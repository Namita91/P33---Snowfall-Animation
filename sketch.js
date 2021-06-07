const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg, breezeSound;
var engine, world;
var girlImg, girl, boyImg, boy;
var inviGround, inviSky, inviSky2;
var snowArray = [];

function preload() {
  bg = loadImage("snow1.jpg");

  girlImg = loadImage("girlJump.png");
  boyImg = loadImage("boyJump.png");

  breezeSound = loadSound("BreezeSound.mp3");
}

function setup() {
  createCanvas(1500,800);

  girl = createSprite(400,700);
  girl.addImage(girlImg);
  girl.scale = 0.13;
  girl.velocityY = -10;

  boy = createSprite(700,600);
  boy.addImage(boyImg);
  boy.scale = 0.06;
  boy.velocityY = 15;

  //ground to have a surface for bouncing the girl and boy in snow
  inviGround = createSprite(500, 790, 800, 10);
  inviGround.visible = false;

  //surface to make boy bounce from in sky
  inviSky = createSprite(500, 130, 800, 10);
  inviSky.visible = false;

  //surface to make girl bounce from sky
  inviSky2 = createSprite(500, 330, 800, 10);
  inviSky2.visible = false;

  engine = Engine.create();
  world = engine.world;

  breezeSound.play();
}

function draw() {
  background(bg); 

  Engine.update(engine);

  //creating new snow objects and saving in array to be displayed later
  if(frameCount%30 === 0) {
    snowArray.push(new Snow(random(50,1400), 0, 50,50));
  }

  //displaying snow objects
  for(var i = 0; i<snowArray.length; i++) {
    snowArray[i].display();
  }

  //girl and boy jumping animation by bouncing them off with invisible ground and sky
  girl.bounceOff(inviGround);
  girl.bounceOff(inviSky2);
  boy.bounceOff(inviGround);
  boy.bounceOff(inviSky);

  drawSprites();
}