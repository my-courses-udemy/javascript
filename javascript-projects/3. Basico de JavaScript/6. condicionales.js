let num1 = 0;
let num2 = 5;
/* EXISTEN 2 FORMAS */
// if (num>0) console.log(`${num} es mayor que 0`);

// if (num<0) {
//     console.log(`${num} es mayor que 0`);
//     console.log(`${num} es mayor que 0`);
// }else{
//     console.log(`${num} es menor que 0`)
// }

// if (num>0) {
//     console.log(`${num} es mayor que 0`);
//     console.log(`${num} es mayor que 0`);
// }else if(num<0){
//     console.log(`${num} es menor que 0`)
// }else{
//     console.log(`${num} es igual a 0`)
// }


// OPERADORES LOGICOS, igual que en java and(&&) or(||)
if (num1>0 || num2>0) {
    console.log(`${num1} y ${num2} son mayores que 0`)
}