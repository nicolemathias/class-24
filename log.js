class log{
    constructor(x,y,height,angle){
        var options = {
            restitution : 0,
            friction: 0.3,
            density:1.0

        }
        this.body = Bodies.rectangle(x,y,height,20,options)
        this.width = height;
        this.height = 20;
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
        console.log(this.body.position)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("blue")
        fill("yellow")
        
        rect(0,0,this.width,this.height)
        pop();

    }
}