const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerArcher;
var playerArcher;
var player, playerBase;
var computer, computerBase;

var arrow;
var angle;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;

  playerBase = new PlayerBase(300, height - 300, 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher (340, playerBase.body.position.y - 180, 120, 120, angle);

  computerBase = new ComputerBase (width - 300, height - 300, 180, 150);
  computer = new Computer (width - 280, computerBase.body.position.y - 153, 50, 180);
  computerArcher = new ComputerArcher (width - 340, computer.body.position.y - 30, 120, 120);
  //Create an arrow Object

  arrow = new PlayerArrow (playerArcher.body.position.x + 30, playerArcher.body.position.y, 60, 10);
 // arrow.body.angle = playerArcher.body.angle;

  
}

function draw() {
  background(180);
  imageMode (CENTER);
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()

  arrow.display()


  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  //if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher


  //}
}

function keyReleased() {
  if (keyCode === 32) {
    arrow.shoot(playerArcher.body.angle);
  }

}


