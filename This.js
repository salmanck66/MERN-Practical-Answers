//In Global/Window in browser
this.a = "hi"
console.log(this.a)
console.log(this)

//Object
function Person(name) {
    this.name = name;
}
const person = new Person('Alice');
console.log(person.name);

