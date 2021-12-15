// SE DECLARA OBJETOS ASI
const person = {
    name: 'Juan',
    age: 20,
    sons: ['Zoey','Diego', 'Pepe', 'Rosa', 'Tomas']
}

// 2 formas de pedir el valor de una variable
// console.log(person.name);
// console.log(person['name']);


// // Podemos imprimir los indices del objeto
// for(const key in person){
//     console.log(key);
// }

// // podemos imprimir los valores de la persona
// for(const key in person){
//     console.log(person[key]);
// }

// para imprimir valores de un array es 'OF', en clases y objetos se usa in
// for(const son of person.sons){
//     console.log(son);
// }

console.log(`Hola ${person.name} tienes ${person.age} años, y tus hijos se llaman ${person.sons.join(', ')}`);