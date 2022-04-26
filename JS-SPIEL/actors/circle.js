import actor from "./actor.js"

export default class circle extends actor{
    direction = 0;

    constructor(x = 200, y = 10){        
        super();
    this.x = x;
    this.y = y;
        
    }

    render(context){        
        context.beginPath();
        context.arc(this.x, this.y, 8, 0, 2 * Math.PI);
        context.fillStyle = "green";
        context.fill();
            
    }

    update(){
        if(this.direction === 0){
              this.y += 0.8;              
        }
        if(this.y >= 399){
            this.direction = 0;
            this.y = 0;
        }
    }
}