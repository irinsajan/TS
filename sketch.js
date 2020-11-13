const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var platform1,platform2;
var block1,block2,block3;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
	world = engine.world;

  platform1 = new Ground(500,500,200,20);
  platform2 = new Ground(800,350,200,20);

  block1 = new Box(515,100);
  block2 = new Box(545,100);
  block3 = new Box(575,100);

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
