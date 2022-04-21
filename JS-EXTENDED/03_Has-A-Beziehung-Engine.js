export default class engine{
    constructor(serialnumber){
        this.serialnumber = serialnumber;
    }

    go(){
        console.log("I am running!" + this.serialnumber);
    }
}