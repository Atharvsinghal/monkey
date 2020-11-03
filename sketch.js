
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //create monkey
  createCanvas(600,400);
  monkey=createSprite(80,350,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
   
  ground=createSprite(400,382,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  obstacleGroup=new Group();
 FoodGroup= new Group();
}


function draw() {
background(255);
  if(ground.x>0){
  ground.x=ground.width/2;
 
    
  } 
   if(monkey.isTouching(FoodGroup)){
  
  FoodGroup.destroyEach();
  
  
     
  }
    if(keyDown("space")&& monkey.y >= 290) {
        monkey.velocityY = -12;
       
    }
   if(keyDown("space")&& monkey.y >= 290) {
        monkey.velocityY = -12;
       
    }
  monkey.velocityY= monkey.velocityY+0.8;
  monkey.collide(ground);
  spawnObstacles();
  spawnbanana()
 drawSprites() 


}

function spawnbanana(){
 if (frameCount % 100 ===0){
   
   var banana=createSprite(600,200,20,20);
  banana.addImage(bananaImage)
   banana.velocityX=-6;
   var rand = Math.round(random(1,6));
   //assign scale and lifetime to the obstacle           
    banana.scale = 0.1;
    banana.lifetime = 300;
   
   //add each obstacle to the group
    FoodGroup.add(banana);
   
   
   
   
   
   
 } 

}
function spawnObstacles(){
 if (frameCount % 100 === 0){
   var obstacle = createSprite(600,350,10,40);
   obstacle.velocityX = -6;
     
      obstacle.addImage(obstacleImage);
      
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}


















