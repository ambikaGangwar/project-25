const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbin;
 
function setup() {
	createCanvas(1700,700);
  background(250,118,209);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.


	Engine.run(engine);
   groundObj = new Ground(width/2,670,width,20);
   paperObj = new Paper( 200,450,40);
   dustbinObj = new Dustbin(1200,650);
   
    
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  groundObj.display();
  paperObj.display();
dustbinObj.display();
drawSprites();

  
 
}
function keyPressed()  {

  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	  
  }

  }



