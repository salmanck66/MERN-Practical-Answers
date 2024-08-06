function counter() {
    let value = 1
    return ()=>
    {
        return value++
    }
} 
let counter1 = counter()
console.log(counter1())
console.log(counter1())
console.log(counter1())