function outerFunction(outerVariable){
    const outer2 = "Hi"
    return function innerFunction(innerVariable){
        console.log(outerVariable);
        console.log(innerVariable);
        console.log(outer2);
    }
}

let newFunction = outerFunction("outer")

newFunction("inner")