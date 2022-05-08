class Cannonball {
    constructor(x, y) {

 var Cannonball_option={

   isStatic:true
}

      this.r=30;

this.body=  Bodies.circle(x,y,this.r,Cannonball_option); 
this.image = loadImage("assets/cannonball.png");


World.add(world,this.body)
      
      

    }
    display() {
      push();
     
    var pos=this.body.position

      imageMode(CENTER);
      image(this.image, pos.x,pos.y,this.r,this.r);
      pop();
      
    }

    shoot(){

        var new_angle= cannon.angle-28; 

        new_angle=new_angle*(3.14/180);

        var velocity= p5.Vector.fromAngle(new_angle); 

        velocity.mult(20); 



        Body.setStatic(this.body,false); 

        Body.setVelocity(this.body,{
            x:velocity.x,
            y:velocity.y
        })
   

    }
    
    

  }
