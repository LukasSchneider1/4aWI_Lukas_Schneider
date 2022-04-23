const items = [
    {name: "Bike", price: 100},
    {name: "TV", price: 200},
    {name: "Album", price: 10},
    {name: "Music", price: 5},
    {name: "Book", price: 500},
    {name: "Phone", price: 600},
    {name: "Computer", price: 40}
]

//FILTER
const filterItems = items.filter((item) => {
    return item.price <= 100
})

//MAP
const mapItems = items.map((item) => {
    return item.name
})

//FIND
const findItems = items.find((item) => {
    return item.name === "Bike"
})

//FOREACH
const foreachItem = items.forEach((item) => {
    console.log(item);
})

//SOME
const someItems = items.some((item) => {
    return item.price >= 1000
})

//EVERY
const everyItems = items.every((item) => {
    return item.price >= 0
})

//REDUCE
const reduceItems = items.reduce((amount, item) => {
    return item.price + amount
}, 0)

const numbers = [1,2,3,4,5,6,7,8]

//INCLUDE
const includeItems = numbers.includes((7))

console.log(includeItems)