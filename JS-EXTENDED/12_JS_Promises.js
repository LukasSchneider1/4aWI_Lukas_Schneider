
let p = new Promise((resolve, reject) => {
    let a = 1 + 2
    if(a == 2){
        resolve("success")
    }
    else{
        reject("failure")
    }
})

p.then((message) =>{
    console.log("This is a then " + message)
}).catch((message) => {
    console.log("This is a then " + message)
})

