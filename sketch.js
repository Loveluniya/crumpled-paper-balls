const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground1,ground2,ground3;
// creating variables here


function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

 var ball_options={
   
 isStatic:false,
 restitution : 0.3,
 friction : 0,
 density : 1.2
 
 }
  
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
    ball = Bodies.circle(100,100,11,ball_options);
  World.add(world,ball);
 fill("white")
  
  
   ground1 = new Ground(300,360,1000,10);
   ground2 = new Ground(620,313,10,75);
   ground3 = new Ground(500,313,10,75);
   
 }


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,25);
  
  ground1.show();
  ground2.show();
  ground3.show();
  
  drawSprites();
 
}

function keyPressed(){
  
  Matter.Body.applyForce(ball,{x:0,y:0},{x:11.5,y:14.8})
  
  
}

