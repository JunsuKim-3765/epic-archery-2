class ComputerArcher {
    constructor(x, y, w, h) {
      var opt = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, w, h, opt);
      this.w = w;
      this.h = h;
      //this.collapse = false;
      this.image = loadImage("./assets/computerArcher.png");
  
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body, PI / 2); // -90 degree
    }
    
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
       
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.w, this.h);
      pop();
    }
}