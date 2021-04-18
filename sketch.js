const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boyImg, boy, ground, stone, tree, m1, m2, m3, m4, m5, m6 ,m7 ,m8, m9, m10, m11, bg
var launcherObj, launcherForce= 100

function preload()
{
	boyImg= loadImage("Images/boy.png")
 
//bg= loadImage("MatterJSBoilerPlate-master\Images\Plucking mangoes\myBg.jpg")
}

function setup() {
	createCanvas(800, 700);

	/*engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground= new Ground(400, 600, 800, 50)*/

/*	boy= Bodies.rectangle(23, 34, 42, 50)
	World.add(world, boy)*/

 /* tree= new Tree(56, 86, 46, 98)

  stone= new Stone(23, 45, 56, 67)

 // mangoGrp= createGroup()

  m1= new Mango(454, 54, 7)
  m2= new Mango(421, 73, 8)
  m3= new Mango(369,95 , 4)
  m4= new Mango(611, 32, 6)
  m5= new Mango(284,96 , 8)
  m6= new Mango(373,32 , 4)
  m7= new Mango(307,67, 7)
  m8= new Mango(353, 76, 6)
  m9= new Mango(576 , 41, 5)
  m10= new Mango(497, 64, 7)
  m11= new Mango(687, 77, 4)
  //mangoGrp.add(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11)

  launcherObj = new Launcher(stone.body, {x:45, y:34})

	Engine.run(engine);*/
  
}

function draw() {

  /*Engine.update(engine)
  rectMode(CENTER);
  //background(0,0,0);
  background(bg)*/
  background(230)
  //boy.display()
  //image(boyImg, 23, 34, 42, 50)
  image(boyImg ,200,340,200,300);
  /*stone.display()

  tree.display()

  m11.display()
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  m6.display()
  m7.display()
  m8.display()
  m9.display()
  m10.display()

  launcherObj.display()

  /*if (mouseReleased()) {
    if(keyDown=== SPACE){
      stone.attach()
    }
  }*/

  /*if (stone.isTouching(MangoGrp)) {
      MangoGrp.isStatic:false
  }*/

  //KeyDown()
  
}

/*function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased() {
  fly()
}

function KeyDown() {

if(keyDown("space")) {
stone.attach()
}

}*/