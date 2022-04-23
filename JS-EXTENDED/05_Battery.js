
export default class battery{

    
    constructor(state1, state2){
        this.state1 = state1;
        this.state2 = state2;
    }

    getStatus(){        
        var mittelwert = (this.state1 + this.state2)/2 ;
        console.log(mittelwert + "%")
        this.hasPower(mittelwert)
    }

    hasPower(mittelwert){
        if(mittelwert >= 50){
            console.log("TRUE")
        }
        else{
            console.log("FALSE")
        }
    }

    turnOn(){
        this.state1 -= 5
        this.state2 -= 5
        this.getStatus()
    }
}