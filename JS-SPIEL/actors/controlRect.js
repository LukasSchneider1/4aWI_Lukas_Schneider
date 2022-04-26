import actor from "./actor.js";

export default class controlRect extends actor{
    
    constructor(){
        super();
        this.x = 0;
        this.y = 0;
        let that = this;
        document.addEventListener("keypress", function(key){            
            if(key.key === "i"){
                that.y -= 30;                
            }
            else if(key.key === "m"){
                that.y += 30;
            } 
            else if(key.key === "j"){
                that.x -=30
            }
            else if(key.key === "l"){
                that.x +=30
            }
            if(that.x >= 399 || that.x < 0){
                alert("Thats out of my range!");
                that.x = 0;
                that.y = 0;
            }
            if(that.y >= 399 || that.y < 0){
                alert("Thats out of my range!");
                that.y = 0;
                that.x = 0;
            }
        })        
    }
    
    render(context){
        context.fillRect(this.x,this.y,30,30)
    }

    update(){

    }
}