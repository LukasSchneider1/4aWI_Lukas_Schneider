import car from './03_Has-A-Beziehung.js'
import engine from './03_Has-A-Beziehung-Engine.js'

let c1 = new car("ferrari 1");
let c2 = new car("BMW 2");

let e1 = new engine("123");
let e2 = new engine("987");

c1.setEngine(e1)

c1.drive();