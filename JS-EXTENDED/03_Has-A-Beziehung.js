import engine from './03_Has-A-Beziehung-Engine.js'

export default class car{
    constructor(name){
        this.name = name;
    }

    setEngine(engine){
        this.engine = engine;
        console.log(this.name)
    }

    drive(){
        console.log("I am starting to drive");
        this.engine.go();

    }
}