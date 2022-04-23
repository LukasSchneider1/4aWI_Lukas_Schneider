import battery from './05_Battery.js'

let b1 = new battery(80, 50)

b1.getStatus()

for(let i = 0; i < 5; i++){
    b1.turnOn();
}



