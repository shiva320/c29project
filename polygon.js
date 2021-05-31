class polygon{
    constructor(){
        var option = {
            stiffness: 0.04
            
        }
        polygon = Bodies.cricle(50,200,20)
        world.add(world,polygon);

        slingShot = new Slingshot(this.polygon,{x:100,y:200});
    }
    display(){
        if(this.sling.polygon){
            polygon = this.sling.polygon.position;

            strokeWeight(4);
        }

        fly(){
            this.sling.polygon = null
        }
        
        
    }
}