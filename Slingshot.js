class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling2,170,80);

        image(this.sling1,200,80);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(12);
         //   line(pointA.x, pointA.y, pointB.x, pointB.y);
         stroke(48,22,8);
         if(pointA.x < 220 ){
         line(pointA.x-25,pointA.y,pointB.x-10,pointB.y+10);
         line(pointA.x-25,pointA.y,pointB.x+20,pointB.y+10);
         image(this.sling3,pointA.x-25,pointA.y-15,15,35);
         }
         else 
         { 
         line(pointA.x+25,pointA.y,pointB.x-10,pointB.y+10);
         line(pointA.x+25,pointA.y,pointB.x+20,pointB.y+10);
         image(this.sling3,pointA.x+25,pointA.y-15,15,35);


         }
        }
    }
    
}