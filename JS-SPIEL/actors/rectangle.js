import actor from "./actor.js";

export default class rectangle extends actor {
    direction = 0;
  constructor(x = 10, y = 10) {
      super();
    this.x = x;
    this.y = y;
  }

  render(context) {
    context.fillRect(this.x, this.y, 10, 10);
  }

  update() {    
    if(this.direction === 0){
        this.x ++;
    }
    else{
        this.x--;
    }
    if(this.x>400){
         this.direction = 399;
    }
    if(this.x < 0){
        this.direction = 0;
        this.x = 1;
    }
  }
}
