class Unmbrella {
    constructor(x,y){
        var options = {
           
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.unmbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        
        World.add(world, this.unmbrella)
    }

    display(){
        var pos = this.unmbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}