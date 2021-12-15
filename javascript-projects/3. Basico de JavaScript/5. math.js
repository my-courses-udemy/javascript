// Objeto estatico
// Tenemos que usar su nombre para utilizarlo

console.log(Math.E);
console.log(Math.PI);

let num = 5;

// Valor absoluto
console.log(Math.abs(num));

// devuelve el redondeo hacia el numero mayor
console.log(Math.ceil(num));
// devuelve el redondeo hacia el numero menor
console.log(Math.floor(num));

console.log(Math.pow(5,3));

// math random, generar numero aleatorios, y math round redondear un nro
console.log(Math.round(Math.random()*100));

// Generar un nro aleatorios entre un nro min y un nro max
// console.log(Math.random()*(max-min)+min);
console.log(Math.round(Math.random()*(100-50)+50));

// sirve para determinar si un nro es positivo(1),negativo(-1) o cero(0) devolvienddo estos valores
console.log(Math.sign(0))