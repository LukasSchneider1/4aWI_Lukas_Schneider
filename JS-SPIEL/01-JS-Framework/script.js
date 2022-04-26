
// SetInterval => Aktion läuft immer, deshalb nicht sehr performant

import rectangle from "../actors/rectangle.js"
import actor from "../actors/actor.js"
import controlRect from "../actors/controlRect.js"
import circle from "../actors/circle.js"
 
// RequestAnimationFrame => wird die ganze Zeit aufgerufen, wenn es auch sichtbar ist

const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

const actors = []
actors.push(new rectangle(0,200));
actors.push(new controlRect());
actors.push(new circle());

setInterval(function(){
    context.clearRect(0,0,400,400)    
    actors.forEach(element => {
        element.update();
        element.render(context);
    });
    
}, 10)


