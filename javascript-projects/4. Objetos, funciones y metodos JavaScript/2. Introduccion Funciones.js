// function saludar() {
//     console.log('Hello');
// }

// Si solo es una linea de codigo se imprime directamente sin llaves
// const saludar = () => console.log('Hello');
// const saludarUsuario = (user) => console.log(`Hola ${user}`);

// saludarUsuario('Santi');

// 2 FORMAS DE DECLARAR LA VARIABLE, DEPENDIENDO SI TIENE UNA SOLA FILA O NO
// const suma = (num1,num2) => {
//     if (num1 == 2) {
//         return num1 + num2;
//     }
//     console.log('Esto no se ejecuta si entra a if')
//     return num1;
// } 

// console.log(suma(2,5));

const suma = (num1,num2) => num1 + num2
let result = suma(3,4);
console.log(result);