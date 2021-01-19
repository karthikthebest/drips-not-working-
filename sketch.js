const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var Thunder, Thunder1,Thunder2,Thunder3,Thunder4;

var engine, world;
var drip = [];
var rand;
var maxDrops=100;
var thunderCreatedFrame=0;

function preload(){
    Thunder1 = loadImage("thunderbolt/1.png");

    Thunder2 = loadImage("thunderbolt/2.png");

    Thunder3 = loadImage("thunderbolt/3.png");

    Thunder4 = loadImage("thunderbolt/4.png");

}

function setup(){
   
    engine = Engine.create();

    world = engine.world;

    createCanvas(400,700);
    unmbrella = new Unmbrella(200,500);

    
    if(frameCount % 155 === 0){

        for(var i=0; i<maxDrops; i++){
            drip.push(new Drop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background("purple"); 

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(Thunder1);
            break;
            case 2: thunder.addImage(Thunder2);
            break; 
            case 3: thunder.addImage(Thunder3);
            break;
            case 4: thunder.addImage(Thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.7,0.9)

        if(thunderCreatedFrame + 10 ===frameCount && thunder){
            thunder.destroy();
        }
    
        unmbrella.display();
    
        
        for(var i = 0; i<maxDrops; i++){
            drip[i].display();
            drip[i].update()
            
        }
    
        drawSprites();
    }
}   

