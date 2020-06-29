var tunnel
var tunnel2,fishGroup,egg,egg1,egg2
var ground,ground2,fishtank,fish1,fish2,fish3,fish4,invisground,invisground1
var piramidwall1,piramidwall2,piramidwall3,mummy,mummyImage
var spiderCave,Finalboss,FinalbossImage,spider,spiderImage
var town,fishImage,eggImage,Yeti,yetiImage
var swamp,swampImage,snowyOwl,snowyOwl1,snowyOwl2,snowyOwlImage,player,playerImage,playerImage2,playerImage3,playerImage4
var playerImage5,playerImage6
var gameState = "Bat"
function preload(){
fishImage = loadImage("pictures/fish.webp")
eggImage = loadImage("pictures/StarFruit.webp")
FinalbossImage = loadImage("pictures/Angelofdeath.webp")
spiderImage = loadImage("pictures/Spider.webp")
mummyImage = loadImage("pictures/Mummy.webp")
yetiImage = loadImage("pictures/Yeti.webp")
swampImage = loadImage("pictures/swampMonnster.webp")
snowyOwlImage = loadImage("pictures/Snowyowl.webp")
playerImage = loadImage("pictures/Stone_Eater-0.webp")
playerImage2 = loadImage("pictures/DemonicIMP.webp")
playerImage3 = loadImage("pictures/FOD_Pterodactyl.webp")
playerImage4 = loadImage("pictures/Dragon.webp")
playerImage5 = loadImage("pictures/Phoenix.webp")
playerImage6 = loadImage("pictures/reaper.webp")
}
function setup() {
  createCanvas(1200,800);

  player = createSprite(800, 375, 5, 5);
player.addImage(playerImage)
player.scale = 0.5


  ground = createSprite(800,400,600,10)

  tunnel1 = createSprite(1000,500,290,10)
  tunnel1.rotation = -45;

  tunnel2 = createSprite(1100,500,400,10)
  tunnel2.rotation = -45;

  ground2 = createSprite(200,400,300,10)

  piramidwall1 = createSprite(560,270,300,10)
  piramidwall1.rotation = -65;

  piramidwall2 = createSprite(635,155,50,10)
  piramidwall2.rotation = 65;

  piramidwall3 = createSprite(710,330,150,10)
  piramidwall3.rotation = 65;

fishtank = createSprite(410,600,450,10)
fishtank.rotation = -65;

fish1 = createSprite(300,600,10,10)
fish1.velocityX = 2
fish1.velocityY = -3
fish1.addImage(fishImage)
fish1.scale = 0.5

fish2 = createSprite(100,600,10,10)
fish2.velocityX = 2
fish2.velocityY = -3
fish2.addImage(fishImage)
fish2.scale = 0.5

fish3 = createSprite(350,500,10,10)
fish3.velocityX = 2
fish3.velocityY = -3
fish3.addImage(fishImage)
fish3.scale = 0.5

fish4 = createSprite(200,600,10,10)
fish4.velocityX = 2
fish4.velocityY = -3

fish4.addImage(fishImage)
fish4.scale = 0.5

invisground = createSprite(400,400,200,10)
invisground.visible = false

invisground1 = createSprite(50,400,100,10)
invisground1.visible = false

fishGroup = new Group()
fishGroup.add(fish1)
fishGroup.add(fish2)
fishGroup.add(fish3)
fishGroup.add(fish4)

egg = createSprite(850,380,20,20)
egg.addImage(eggImage)
egg.scale = 0.5

egg1 = createSprite(890,380,20,20)
egg1.addImage(eggImage)
egg1.scale = 0.5

egg2 = createSprite(1000,380,20,20)
egg2.addImage(eggImage)
egg2.scale = 0.5

Finalboss = createSprite(500,710,20,20)
Finalboss.addImage(FinalbossImage)
Finalboss.scale = 0.60

spider = createSprite(950,730,20,20)
spider.addImage(spiderImage)

mummy = createSprite(600,350,10,10)
mummy.addImage(mummyImage)
mummy.scale = 0.70

Yeti = createSprite(200,350,10,10)
Yeti.addImage(yetiImage)

swamp = createSprite(850,200,10,10)
swamp.addImage(swampImage)
swamp.scale = 0.4

snowyOwl = createSprite(200,200,10,10)
snowyOwl.addImage(snowyOwlImage)
snowyOwl.scale = 0.70

snowyOwl1 = createSprite(300,100,10,10)
snowyOwl1.addImage(snowyOwlImage)
snowyOwl1.scale = 0.70

snowyOwl2 = createSprite(100,150,10,10)
snowyOwl2.addImage(snowyOwlImage)
snowyOwl2.scale = 0.70


}
function fishBounce(){
  fishGroup.bounceOff(fishtank)
  fishGroup.bounceOff(ground2)
  fishGroup.bounceOff(invisground)
  fishGroup.bounceOff(invisground1)
}
function colourShapes(){
  fill("lightblue")
  shape(0,800,0,400,500,400,320,800)
  fill(rgb(139,69,19))
  shape(500,400,320,800,1200,800,1200,400)
  noStroke()
  fill(rgb(105,105,105))
  shape(1200,400,1100,400,900,600,960,640)
}


function draw() {
  background(0);
  Edges = createEdgeSprites();
  if(gameState==="End"){
    textSize(50)
    text("GAME OVER",600,400)
    player.visible = false
  }
  if(gameState==="Bat"){
      if(player.isTouching(egg)){
      egg.visible = false
      }
      if(player.isTouching(egg1)){
        egg1.visible = false
      }
      if(player.isTouching(egg2)){
          egg2.visible = false
          gameState = "IMP"
          player.addImage(playerImage2)
      }
      if(player.isTouching(swamp)||player.isTouching(Yeti)||player.isTouching(spider)||player.isTouching(mummy)||
      player.isTouching(snowyOwl)||player.isTouching(snowyOwl1)||player.isTouching(snowyOwl2)||player.isTouching(Finalboss)){
      gameState = "End"
      }
  }


  if(gameState==="IMP"){

    if(player.isTouching(swamp)){
        swamp.visible = false
        gameState = "Dino"
        player.addImage(playerImage3)
    }
    if(player.isTouching(Yeti)||player.isTouching(spider)||player.isTouching(mummy)||
    player.isTouching(Finalboss)){
    gameState = "End"
    }
}

if(gameState==="Dino"){

   if(player.isTouching(snowyOwl)){
      snowyOwl.visible = false
      }
      if(player.isTouching(snowyOwl1)){
        snowyOwl1.visible = false
      }
      if(player.isTouching(snowyOwl2)){
          snowyOwl2.visible = false
          gameState = "Dragon"
          player.addImage(playerImage4)
          player.scale = 0.3
      }
  if(player.isTouching(Yeti)||player.isTouching(spider)||player.isTouching(mummy)||
  player.isTouching(Finalboss)){
  gameState = "End"
  }
}

if(gameState==="Dragon"){

  if(player.isTouching(fish1)){
    fish1.visible = false
    }
  if(player.isTouching(fish2)){
      fish2.visible = false
      }
  if(player.isTouching(fish3)){
        fish3.visible = false
        }
  if(player.isTouching(fish4)){
          fish4.visible = false
          }
    

  if(player.isTouching(mummy)){
      mummy.visible = false
      gameState = "P"
      player.addImage(playerImage5)
  }
  if(player.isTouching(Yeti)||player.isTouching(spider)||
  player.isTouching(Finalboss)){
  gameState = "End"
  }
}

if(gameState==="P"){

  if(player.isTouching(Yeti)){
     Yeti.visible = false
     }
     if(player.isTouching(spider)){
         spider.visible = false
         gameState = "Reaper"
         player.addImage(playerImage6)
         player.scale = 0.70
     }
 if(player.isTouching(Finalboss)){
 gameState = "End"
 }
}

if(gameState==="Reaper"){

  if(player.isTouching(Finalboss)){
      Finalboss.visible = false
      fill("red")
      textSize(50)
      text("I WILL BE BACK YOUNG HERO",600,400)
      
  }
  }



  //noStroke()
  //fill("brown")
  //ellipse(850,650,200,200)
  //ellipse(600,600,400,400)
  if(keyDown("space")||player.collide(Edges[3])){
player.velocityY = -8
console.log("jump")
  }

  if(keyDown("left")){
    player.x = player.x-5
      }

      if(keyDown("right")){
        player.x = player.x+5
          }
player.velocityY = player.velocityY+0.5
player.collide(ground)
player.collide(ground2)
player.collide(piramidwall3)
player.collide(piramidwall2)
player.collide(piramidwall1)
player.collide(tunnel1)
player.collide(tunnel2)
player.collide(fishtank)
player.collide(Edges)
  
  fill(rgb(121,228,254))
  shape(1200,400,1200,0,0,0,0,400)
fill(rgb(0,0,128))
  ellipse(180,350,250,250)
  noStroke()
  fill(rgb(0,0,128))
  shape(350,400,350,330,250,330,250,400)
  fishGroup.bounceOff(Edges)
  fishBounce();
  colourShapes(); 
  drawSprites();
}