// Erstelle zwei Zufallszahl zwischen 0 und 100

let random1 = Math.random() * 100;
let random2 = Math.random() * 100;
radnomInt1 = Math.round(random1)
radnomInt2 = Math.round(random2)
// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"



console.log(radnomInt1)
console.log(radnomInt2)

if(radnomInt1 < radnomInt2 &&  radnomInt1 < 50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
}

else if(radnomInt1 < 30 || radnomInt2 < 30){
    console.log("Eine der beiden ist kleiner als 30")
}

else if(radnomInt1 < 50 && radnomInt2 != 50){
    console.log("Erste Zahl klein, zweite kein 50iger")
}

