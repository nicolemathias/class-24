const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, ball;

var box1,box2,pig1,log1,box3,box4,pig2,log2,box5,log3,log4; 

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new box(700,320,70,70)
    box2 = new box(920,320,70,70)
    ground1 = new ground(600,height,1200,20)
    pig1 = new pig(810,350)
    log1 = new log(810,300,300,PI/2)
    box3 = new box(700,230,70,70)
    box4 = new box(920,230,70,70)
    pig2 = new pig(810,220)
    log2 = new log(810,200,300,PI/2)
    box5 = new box(810,160,70,70)
    log3 = new log(760,120,150,PI/2)
    log4 = new log(870,120,150,PI/2)

    console.log(box1.body.position)
    console.log(box3.body.position)
    console.log(log1.body.position)
}

function draw(){
    background(0);
    Engine.update(engine);

    ground1.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}
