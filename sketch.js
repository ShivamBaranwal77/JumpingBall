var canvas;
var music;
var surface1, surface2, surface3, surface4;
var ball;
var Edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(1075,600);
    surface1=createSprite(150,595,200,20);
    surface1.shapeColor="red";

    surface2=createSprite(400,595,200,20);
    surface2.shapeColor="green";

    surface3=createSprite(650,595,200,20);
    surface3.shapeColor="yellow";

    surface4=createSprite(900,595,200,20);
    surface4.shapeColor="black";

    ball=createSprite(900,575,20,20);
    ball.shapeColor="white";
    ball.velocityX=-4;
    ball.velocityY=-4;
    ball.x=Math.round(random(0,800));

    Edges=createEdgeSprites();

}

function draw() {
    background(169,169,169);
    ball.bounceOff(Edges)

    if(ball.isTouching(surface1)){
        ball.shapeColor="red";
        ball.bounceOff(surface1);
        music.play();
    }

    if(ball.isTouching(surface2)){
        ball.shapeColor="green";
        ball.velocityX=0;
        ball.velocityY=0;
        music.play();
    }

    if(ball.isTouching(surface3)){
        ball.shapeColor="yellow";
        ball.bounceOff(surface3);
        music.play();
    }

    if(ball.isTouching(surface4)){
        ball.shapeColor="black";
        ball.velocityX=0;
        ball.velocityY=0;
        music.play();
    }
    textSize(20);
    text("If ball touches second or fourth surface it will stop", 300,280);
    text("If ball touches first or third surface it will bounce", 308,300);
    drawSprites();
}