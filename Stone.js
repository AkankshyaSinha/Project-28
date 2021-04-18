class Stone extends BaseClass{
    constructor(x, y, width, height){
        super(x, y, width, height)
        var options = {
             isStatic: false, 
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.image= loadImage("Plucking+mangoes/stone.png")
    }

    display(){

        super.display()
    }

}