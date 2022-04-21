export default class Car{
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