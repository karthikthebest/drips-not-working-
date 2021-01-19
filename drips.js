class Drop{

     constructor(x,y){
       var options = {
          friction: 0.1,
          restitution: 0.1

       }
         this.drip = Bodies.circle(x,y,5,options)
         this.radiues = 5;
         World.add(world, this.drip)
     }

     update(){
         if(this.drip.position.y > height){

        Matter.Body.setPosition(this.drip,{x:random(0,400), y:random(0,400)})

         }
        }
        display(){
            fill("aqua");
            ellipseMode(CENTER);
            ellipse(this.drip.postion.x,this.drip.postion.y,this.radius,this.radius)
        }
    }

