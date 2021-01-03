var canvas;
var music;
var box1,box2,box3,box4
var ball


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(460,550,150,10)
    box1.shapeColor="red"
    box2=createSprite(300,550,150,10)
    box2.shapeColor="blue"
    box3=createSprite(135,550,150,10)
    box3.shapeColor="yellow"
    box4=createSprite(625,550,150,10)
    box4.shapeColor="green"
    ball=createSprite(random(20,750),200,20,20)
    ball.velocityY=5



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    if(box1.isTouching(ball)&& ball.bounceOff(box1)){
        ball.shapeColor="red"
        ball.velocityY=0
    }
    if(box2.isTouching(ball)&& ball.bounceOff(box2)){
        ball.shapeColor="blue"
        ball.velocityY=0
    }
    if(box3.isTouching(ball)&& ball.bounceOff(box3)){
        ball.shapeColor="yellow"
        ball.velocityY=0

    }if(box4.isTouching(ball)&& ball.bounceOff(box4)){
        ball.shapeColor="green"
     ball.velocityY=0
    }
    /*if(box1.isTouching(ball)){
        ball.shapeColor=rgb(255,128,0)
        ball.velocityY=0
        
    }
    if(box2.isTouching(ball)){
        ball.shapeColor=rgb(255,128,0)
        ball.velocityY=0
        
    }
    if(box3.isTouching(ball)){
        ball.shapeColor=rgb(255,128,0)
        ball.velocityY=0
    
    }
    if(box4.isTouching(ball)){
        ball.shapeColor=rgb(255,128,0)
        ball.velocityY=0
        
    }*/


drawSprites()
    
}
