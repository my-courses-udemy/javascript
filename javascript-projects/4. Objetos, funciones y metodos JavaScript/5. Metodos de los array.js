let word = 'Hello World ';
// console.log(Array.from(word));

let letters = ['b','d','a','z','e'];
let numbers = [1,100,3,300,8];

console.log(letters.sort());
console.log(numbers.sort());/* lo ordena segun el valor unicode, no de menor a mayor */
console.log(numbers.sort((a,b)=>a-b));/* con esto se ordena numericamente de menor a mayor*/
console.log(numbers.sort((a,b)=>b-a));/* con esto se ordena numericamente de mayor a menor*/