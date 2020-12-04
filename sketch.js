var boyimg;
var treeimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
boyimg = loadImage("boy.png");
treeimg = loadImage("tree.png");


}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
    world = engine.world;

	
	mango1 = new Mango(650,200,40);
	mango2 = new Mango(650,270,40);
	mango3 = new Mango(730,235,40);
	mango4 = new Mango(570,280,40);
	mango5 = new Mango(790,260,40);
	stone = new Stone(50,250,30,30);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boyimg,50,250,200,200);
  image(treeimg,500,150,350,350)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  drawSprites();
 
}



