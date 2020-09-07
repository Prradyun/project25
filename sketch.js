
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

    box1=new Box(600,600,200,150);
	//box2 = new Box(500,600,20,100);
    //box3 = new Box(700,600,20,100);
	paper =new Paper(200,450,20);
	ground = new Ground(width/2,670,width,20);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  box1.display();
 // box2.display();
  //box3.display();
  paper.display();
  ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-55});
	 }
   }

