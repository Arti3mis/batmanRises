class createDrops{
    constructor(x, y){
var options = {friction : 0.1,
   restitution : 0.1
   }
this.body = Bodies.circle(x, y, 5, options);
this.r = 5;
World.add(world, this.body);
  }

updateDrops(){
if(this.body.position.y > height){

Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,800)})
 }
 }          

display(){

fill("blue");
ellipseMode(CENTER);
ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
 
  
    }
    }