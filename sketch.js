var car1,wall1;
var speed,weight;
var car2,car3;
var wall2,wall3;

function setup() {
  createCanvas(1000,400);
 car1=createSprite(50, 100, 30, 20);
 car2=createSprite(50, 200, 30, 20);
 car3=createSprite(50, 300, 30, 20);

 wall1=createSprite(900,100,30,70);
 wall2=createSprite(900,200,30,70);
 wall3=createSprite(900,300,30,70);

 car1.velocityX = 15;
 car2.velocityX = 10;
 car3.velocityX = 5;

  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(1,1,255);  

  if(car1.isTouching(wall1)){
  car1.shapeColor = color(255,0,0)
  car1.velocityX = 0;
  }

  if(car2.isTouching(wall2)){
    car2.shapeColor = color(230,230,0)
    car2.velocityX = 0;
    }

    if(car3.isTouching(wall3)){
      car3.shapeColor = color(0,255,0)
      car3.velocityX = 0;
      }
  drawSprites();
}