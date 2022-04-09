//Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert
//(Rechteckbeispiel adaptieren):
//      X X X X
//      O O O O
//      X X X X
//      O O O O

var array1 = [];
var array2 = [];
var array3 = [];
var array4 = [];

for (let i = 0; i < 17; i++) {
  if (i < 4) {
    array1.push("x");
  }
  if (i > 4 && i <= 8) {
    array2.push("O");
  }
  if (i > 8 && i <= 12) {
    array3.push("x");
  }
  if (i > 12 && i <= 16) {
    array4.push("O");
  }
}

console.log(array1.join(" ") + "\n" + array2.join(" ") + "\n" + array3.join(" ") + "\n" + array4.join(" "));

//2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren
//(zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur
// gerade Zahlen zählt und mit Modulo arbeiten.)

var endNumber = 0;

for (i = 0; i < 101; i++) {
  if (i % 2 != 0) {
  } else if (i % 2 == 0) {
    endNumber += i;
  }
}
console.log(endNumber);

//3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben,
//   z.B.:
//   XX X XX X
//   X  X X  X
//   X       X
//   X       X

var array1 = [];
var array2 = [];

for (let i = 0; i < 7; i++) {
  if (i <= 3) {
    array1.push("x");
  }
  if (i > 4) {
    array2.push(" x");
  }
}

console.log(array1.join("\n") + array2.join(""));
