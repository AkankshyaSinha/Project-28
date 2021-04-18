class Mango{
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius,  options);
        this.radius= radius
        this.image = loadImage("Plucking+mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        ellipse( 0, 0, this.body.radius, this.body.radius)
        pop();
      }
}