class Car{
    horesPower = 70; //Instanzvariable

    constructor(color, brand, country="Deutschland"){ //Color und Brand sind lokale Variablen, die nachher übergeben werden
        this.color = color;
        this.brand = brand;
        this.country = country;
    }


printSpecification(){
    console.log(this.color + " - " + this.brand + " - " + this.horesPower + " - " + this.country);
}
}

class Person{

}

let c1 = new Car("red", "Ferrari", "Italien");
let c2 = new Car("blue", "BMW");
c1.printSpecification();
c2.printSpecification();
