
let random = Math.random() * 1000;
radnomInt = Math.round(random)

console.log(radnomInt)

if(radnomInt > 800){
    console.log("Number is greater than 800!")
}

else if(radnomInt > 500 && radnomInt < 800){
    console.log("Number is between 500 and 800!")
}

else if(radnomInt > 200 && radnomInt < 500){
    console.log("Number is between 200 amd 500!")
}
else if(radnomInt < 200){
    console.log("Number is less than 200!")
}