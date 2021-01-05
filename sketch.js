const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball1;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
    World.add(world, ground);
    var ballOptions = {
        restitution: 1
    }
    ball1 = Bodies.circle(200, 200, 20, ballOptions);
    World.add(world, ball1);
}

function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
    ellipseMode(RADIUS);
    ellipse(ball1.position.x, ball1.position.y, 20, 20);
}