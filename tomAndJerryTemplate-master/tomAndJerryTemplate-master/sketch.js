
var tom, jerry;

function preload() {


function setup(){
    createCanvas(1200,800);
    tom = createSprite(200,200,50,80);
    tom.shapeColor= "green";
    tom.debug = "true";

   jerry = createSprite(400,200,80,30);
   jerry.shapeColor= "green"
   jerry.debug = "true";
}

function draw() {

    background(0,0,0);
    tom.x = = World.mouseX;
    tom.y = world. mouseY;

    if(tom.x - jerry.x < jerry.width/2 + tom.width/2
    && jerry.x - tom.x < jerry.width/2 + tom.width/2){
    tom.shapeColor = "red";
    jerry.shapeColor = "red";
    }
    else{
        tom.shapeColor = "green";
        jerry.shapeColor = "green";

    }

    drawSprites();
}



