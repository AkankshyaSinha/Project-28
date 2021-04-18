class Tree {
    constructor(x, y, width, height,){
        var options = {
             isStatic: true, 
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.image= loadImage("Plucking+mangoes/tree.png")
    }


    display(){  
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}