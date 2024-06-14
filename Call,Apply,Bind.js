//call
const obj1 = {
    name : "Salman",
    age:24

}
const obj2 = {
    name : "Shiyas",
    age : 21
}
function hello(name)
{
    console.log(`Hello ${this.name}`)
}
hello.call(obj1)
hello.call(obj2)

//Apply
function nameage(greet,again,name,age)
{
    console.log(greet+" "+this.name+" "+this.age+" "+ again)
}
nameage.apply(obj1,["hai","hello"])


//Bind

function binding(greet,again,name,age)
{
    console.log(greet+" "+this.name+" "+this.age+" "+ again)
}
const callf = binding.bind(obj1)
callf("hai","hello")