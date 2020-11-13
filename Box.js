class Box{
    constructor(x,y){
        var options={
            'restitution': 0.4,
            'friction': 0
        }
        this.body = Bodies.rectangle(x,y,30,40,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("pink");
        rectMode(CENTER);
        rect(0,0,30,40);
        pop();
    }
}  
