class Bob{
  constructor(x, y,radius) {
      var options = {
          "isStatic" : false,
          'restitution':0.1,
          'friction':1

      }
      this.body = Bodies.circle(x, y,radius);
      this.width = radius;
      this.height = radius;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      fill("green");  
      ellipseMode(RADIUS);
      ellipse(0, 0,this.width,this.height);
      pop();
    }
}
