function sum(a, b){
    return a + b;
}

let sum1 = (a, b) => a + b;

function isPositive(number){
    return number >= 0;
}

let isPositive1 = (number) => number >= 0;


function randomNumber(){
    return Math.random
}


let randomNumber1 = () => Math.random


document.addEventListener('click', function(){
    console.log("CLICK")
})

document.addEventListener('click', () => console.log("CLICK"))

class Person{
    constructor(name){
        this.name = name;
    }

    printNameArrow(){
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        },100)
    }

    printNameFunction(){
        setTimeout(function (){
            console.log('Function: ' + this.name)
        },100)
    }
}

let p1 = new Person("Lukas")

p1.printNameArrow()
p1.printNameFunction()

//Mit dem Arrow kann eine variable vom Konstruktor auch für diese Funktion verwendet werden. Jedoch wenn man es mit function() deklariert, dann wird der Konstruktor nicht erkannt, solange er sich nicht im selben Block befindet