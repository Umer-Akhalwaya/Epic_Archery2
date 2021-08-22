class PlayerArrow {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8,
            //frictionAir: 0.01,
            density: 1.0,
            isStatic: true,
         };

         this.width = width;
         this.height = height;
         this.body = Bodies.rectangle(x, y, this.width, this.height, options);
         this.image = loadImage("arrow.png");
         World.add(world, this.body);
    }
    shoot() {
      var velocity = p5.Vector.fromAngle (playerArcher.angle);
      velocity.mult(20);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, {x: velocity.x + 0.2, y: velocity.y + 5});
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle * - 1.1);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    
    }
}