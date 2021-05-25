var cat1,cat2,cat3,cat4,catImg;
var mouse1,mouse2,mouse3,mouse4,mouseImg;
var garden,gardenImg;



function preload() {
catImg1 = loadImage("images/cat1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
catImg3 = loadImage("images/cat4.png");
mouseImg1 = loadImage("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3 = loadImage("images/mouse4.png");
gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
cat = createSprite(800,550,200,200); 
cat.addImage(catImg1);    
cat.scale = 0.2;

mouse = createSprite(200,550,200,200);
mouse.addImage(mouseImg1);
mouse.scale = 0.2;

}

function draw() {

    background(gardenImg);
    
if(cat.isTouching(mouse))
{
    mouse.addImage("mouse",mouseImg3);
    mouse.changeAnimation("mouse");
}

if(mouse.isTouching(cat))
{
    cat.addImage("cat",catImg3);
    cat.changeAnimation("cat");
    cat.velocityX = 0;
    cat.x = 350;
}

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing")
       mouse.frameDelay = 10;
    }
    
    if(keyCode === LEFT_ARROW){
        cat.addAnimation("catTeasing", catImg2);
       cat.changeAnimation("catTeasing")
       cat.velocityX = -3;
       cat.frameDelay = 10;
    }
    


}
