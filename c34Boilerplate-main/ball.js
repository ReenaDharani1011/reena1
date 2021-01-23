class Ball{
constructor(x,y,w,h){
var op={
'frictionAir':0.004,
'density': 1,
}

this.body=Bodies.rectangle(x,y,w,h,op)
this.w=w;
this.h=h;
World.add(world,this.body);
}

display(){
var angle= this.body.angle;
push();
translate(this.body.position.x,this.body.position.y)
rotate(angle);
ellipse(0,0,this.w,this.h)
pop()

}




}