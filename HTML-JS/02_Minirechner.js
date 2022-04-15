
function addieren(){
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value

    let result = parseFloat(num1) + parseFloat(num2)
    console.log(result)
    document.getElementById("result").innerHTML = result
    
}
function subtrahieren(){
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value

    let result = parseFloat(num1) - parseFloat(num2)
    console.log(result)
    document.getElementById("result").innerHTML = result

}
function multiplizieren(){
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value

    let result = parseFloat(num1) * parseFloat(num2)
    console.log(result)
    document.getElementById("result").innerHTML = result

}
function dividieren(){
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value

    let result = parseFloat(num1) / parseFloat(num2)
    console.log(result)
    document.getElementById("result").innerHTML = result

}

