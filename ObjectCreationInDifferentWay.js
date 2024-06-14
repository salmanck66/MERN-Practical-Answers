var obj = {
    name : "salman",
    age:25
}
console.log(obj)

const object =  Object()
object.name = "Salman"
console.log(object)

function Person(name)
{
    this.name = "Salman"
}

let ex =new Person("Salman")
console.log(ex.name)


function Student(){}
Student.prototype.name = "Salman"
let newstudent = new Student()
console.log(newstudent.name)

const bike = {
    name : "FZ"
}

const car = {
    name:"Alto"
}
const vehicles = Object.assign({},{bike},{car})
console.log(vehicles)


class ES6{
    constructor(name)
    {
        this.name = name
    }
}

let eg = new ES6("Salman")
console.log(eg.name)
