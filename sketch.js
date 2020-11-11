var tower;
var ghost;
var door,climber;
var gamestate="play"
var towerimage,doorimage,ghostimage,ghostjumpingimage,climberimage;

var doorGroup
var climberGroup
var invisibleBlock,invisibleBlockGroup





function preload(){
  towerimage=loadImage("tower.png")
  doorimage=loadImage("door.png")
   ghostimage=loadImage("ghost-standing.png")
   ghostjumpingimage=loadImage("ghost-jumping.png")
  
   climberimage=loadImage("climber.png")
  
}





function setup(){
  createCanvas(600,600)
  
  tower=createSprite(300,300,50,50)
  tower.addImage("tower",towerimage)
  tower.velocityY=1;
  
  ghost=createSprite(200,350,50,50)
  ghost.addImage("ghost",ghostimage)
  ghost.scale=0.5
  
  doorGroup=new Group();
  climberGroup=new Group();
  edge=createEdgeSprites();
  
  
  
  invisibleBlockGroup=new Group();
  
  
  
  
  
  
  
  
}
function draw(){
  
  background("white")
  if(gamestate==="play"){
  if(tower.y>400){
    tower.y=tower.width/2;
    
    
  }
  
  spawnDoor();
  
  if(keyDown("space")){
    ghost.velocityY=-8
   
    
  }
   ghost.velocityY=ghost.velocityY+0.5;
  
  if(keyDown("left")){
    ghost.x=ghost.x-3
  }
  if(keyDown("right")){
    ghost.x=ghost.x+3
  }
  
  
  
  
  
  
  
  
  ghost.collide(edge[3])
 if(climberGroup.isTouching(ghost)){
   ghost.velocityX=0
 } 
  if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
   ghost.destroy(); 
    gamestate="end"
  }
  
  drawSprites();
  }
  else if(gamestate==="end"){
 textSize(30)
 fill("yellow")   
  text("gameover",230,250)
  
  
  
  
  
  
  
  }
}

function spawnDoor(){
  if(frameCount%240===0){
  door=createSprite(200,50,50,50)
  door.addImage("door",doorimage)
  door.velocityY=1;
  door.x=Math.round(random(120,400))
   door.lifetime=800;
    doorGroup.add(door)
   climber=createSprite(200,110,50,50)
     climber.addImage("climber",climberimage)
  climber.velocityY=1;
 climber.x=door.x
   climber.lifetime=800;
    climberGroup.add(climber)
    door.depth=ghost.depth
    ghost.depth=ghost.depth+1
 invisibleBlock=createSprite(200,115,50,2)
  invisibleBlock.debug=true;
    invisibleBlock.velocityY=1;
 invisibleBlock.x=door.x
  invisibleBlock.lifetime=800;
    invisibleBlockGroup.add(invisibleBlock)   
    invisibleBlock.width=climber.width;
    
    
  }
  
  
}






























