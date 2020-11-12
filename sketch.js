const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var platform1,platform2;
var block1,block2,block3;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

  platform1 = new Ground(200,200,100,20);
  platform2 = new Ground(400,600,100,20);

  block1 = new Block(200,300,100,20);
  block2 = new Block(400,600,100,20);
  block3 = new Block(600,900,100,20);

  Engine.run(engine);
 
}

function draw() {
  background(255,255,255);  
  
  platform1.display();
  platform2.display();
  block1.display();
  block2.display();
  block3.display();
  
}