var garden;
var tom,tomimg,tomimg2,tomimg3;
var jerry,jerryimg,jerryimg2,jerryimg3;

function preload() {
    //load the images here
    gardenimg  = loadImage("images/garden.png")
    tomimg = loadImage("images/cat1.png")
    tomimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    tomimg3 = loadImage("images/cat4.png")
    jerryimg = loadImage("images/mouse1.png")
    jerryimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryimg3 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    

    tom = createSprite(870,600,30,30);
    tom.addAnimation("tomsleeping",tomimg)
    tom.scale = 0.2;

    jerry = createSprite(200,600,30,30);
    jerry.addAnimation("jerrystanding",jerryimg2)
    jerry.scale = 0.2;
}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.x = 300;
        tom.scale = 0.2;
        tom.addAnimation("tomdancing",tomimg2)
        tom.changeAnimation("tomdancing");
        jerry.scale =0.15;
        jerry.addAnimation("jerryi",jerryimg)
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tomrunning",tomimg2);
    tom.changeAnimation("tomrunning")
    jerry.frameDelay = 25;
    jerry.addImage(jerryimg2);
}
}
