class Person{
    constructor(name,lastname,age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.date = `Hola me llamo ${this.name} ${this.lastname} y tengo ${this.age} años`;
    }

    saludar(){
        return this.date;
    }
}

const juan = new Person('Juan','Perez',20);
const maria = new Person('Maria','Rodriguez',21);

console.log(juan.saludar());
console.log(maria.saludar());