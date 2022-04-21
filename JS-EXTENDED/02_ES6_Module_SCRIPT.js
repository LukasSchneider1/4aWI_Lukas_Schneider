import Person, {Animal, School} from './02_ES6_Module_Person.js';// diese Schreibweise wird verwendet, da der class Person ein default export zugewiesen wurde
//import {Person, Animal} from './02_ES6_Module_Person.js'; wenn es so angegeben wird, darf kein default export festgelegt werden
import Car from './02_ES6_Module_Car.js'

let p1 = new Person("hansi");
let c1 = new Car("blue", "Ferrari", "Schweiz")
p1.sayHello();
c1.printSpecification();