var cat,cat_runImage,cat_sittingImage,cat_standImage
var mouse,mouse_lookImage,mouse_giftImage,mouseTeasing
var garden,garden_image


function preload() {
    cat_sittingImage=loadAnimation("images/tomSit.png")
     cat_standImage=loadAnimation("images/tomStand.png")
    cat_runImage=loadAnimation("images/tomTwo.png","images/tomThree.png")
    mouse_lookImage=loadAnimation("images/jerryFour.png")
    mouseTeasing=loadAnimation("images/jerryTease.png","images/jerryTwo.png")
     mouse_giftImage=loadAnimation("images/jerryOne.png",)
     garden_image=loadImage("images/garden.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

  cat=createSprite(840,600)
 cat.addAnimation("catSit",cat_sittingImage)
 
  cat.scale=0.2

 mouse=createSprite(300,600)
 mouse.addAnimation("mouselook",mouse_lookImage);
// mouse.addAnimation("mouseGift",mouse_giftImage);
 
 mouse.scale=0.2

 

}

function draw() {

    background(garden_image);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
         cat.velocityX=0;
         cat.x=400
         cat.addAnimation("catStand",cat_standImage)
        cat.changeAnimation("catStand")
        mouse.addAnimation("mouseGift",mouse_giftImage);
        mouse.changeAnimation("mouseGift")
      }

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-2
    cat.addAnimation("catRun",cat_runImage)
    cat.changeAnimation("catRun")

     mouse.addAnimation("mouseTeasing",mouseTeasing);
      mouse.changeAnimation("mouseTeasing") ;   
      mouse.frameDelay = 20
    }

   
  

}
