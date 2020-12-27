
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3, ball4,ball5; 
var rope1,rope2,rope3, rope4,rope5;
var world;
var roof;

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,height/5,600,80);

	diameter=80;

	middleBallX=width/2;
	middleBallY=height/4+400;
	ball1=new BALL(middleBallX-diameter*2,middleBallY,diameter);
	ball2=new BALL(middleBallX-diameter,middleBallY,diameter);
	ball3=new BALL(middleBallX,middleBallY,diameter);
	ball4=new BALL(middleBallX+diameter,middleBallY,diameter);
	ball5=new BALL(middleBallX+diameter*2,middleBallY,diameter);
	

	rope1=new rope(ball1.body,roof.body,-diameter*2, 0)
	rope2=new rope(ball2.body,roof.body,-diameter*1, 0)
	rope3=new rope(ball3.body,roof.body,0, 0)
	rope4=new rope(ball4.body,roof.body,diameter*1, 0)
	rope5=new rope(ball5.body,roof.body,diameter*2, 0)

	
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(220,50,90);
  roof.display();

  rope1.display();rope2.display();rope3.display();rope4.display();rope5.display()	
  ball1.display();ball2.display();ball3.display();ball4.display();ball5.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-45,y:-45});

  	}
}