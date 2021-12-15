const numbers = [-12,3,5,77,4];

console.log(...numbers);

const addNumbers = (a,b,c) => {
    console.log(a+b+c);
}

// Envia a la funcion cada uno  de los valores del array como parametros, es decir, separados
let numbersToAdd = [1,2,3];

// addNumbers(1,2,3);
// addNumbers(...numbersToAdd);


// AÑADIR UN ARRAY A OTRO ARRAY
let users = ['javier','david', 'rosa'];
let newUsers = ['marta','jaime','laura'];

users.push(...newUsers);
// console.log(users);

// COPIAR ARRAYS
// let arr1 = [1,2,3];
// let arr2 = [...arr1];
// console.log(arr2);

// CONCANTENAR ARRAYS
let arr1 = [1,2,3,5,6];
let arr2 = [7,8,9];
let concatArray = [...arr1,...arr2];
// console.log(concatArray);

// ENVIAR NRO INDEFINIDO DE ARGUMENTOS A UNA FUNCION
const restParms = (...numbers) => {
    console.log(numbers);
}

// restParms(1,2,2,2,5,5,6,6);

// libreria Math
const numbers2 = [-12,3,5,77,4];
console.log(Math.max(...numbers2));