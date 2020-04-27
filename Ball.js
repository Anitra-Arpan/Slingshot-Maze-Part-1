class Ball{
    constructor(x,y,radius){
        var options = {
            'restitiution':3.0,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}