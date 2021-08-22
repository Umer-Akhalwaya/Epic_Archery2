class PlayerArcher {

    constructor (x, y, width, height, angle) {
        var options = {
            isStatic: true

        };

        this.x = x;
        this.y = y;
        this.angle = angle;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage ("playerArcher.png");
        World.add(world,this.body);

       Matter.Body.setAngle(this.body, -PI / 2);
    }

    display() {

        var angle = this.body.angle;
        

        if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
            angle += 0.01;
            Matter.Body.setAngle(this.body, angle);
        }
        
        if (keyIsDown(UP_ARROW) && angle > -2.2) {
            angle -= 0.01;
            Matter.Body.setAngle(this.body, angle);
        }
          

        push();
        translate(this.x, this.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }


}