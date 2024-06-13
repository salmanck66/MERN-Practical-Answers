
const counter = count();
console.log(counter())
console.log(counter())


function count()
{
    let a = 1
    return ()=>
        {
           return a++
        }
}
