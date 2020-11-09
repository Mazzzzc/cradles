class Bob {
    constructor (x,y,r) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:0.0,
            density:0.5

        }
  
        this.body = Bodies.circle(x,y,r,options);
        this.r=r;
        World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(CENTER);
      fill(255,0,255);
      stroke(255,0,255);
      //scale(0.5);
      ellipse(pos.x, pos.y,this.r);
      pop();
    }
    move(){
      if (keyCode === UP_ARROW){
          isStatic:false
      }
  }
  }