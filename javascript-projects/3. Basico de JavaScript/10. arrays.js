let numeros = [1,2,3,4,5,6];

let palabras = ['hello','world','i´m','santiago'];

// console.log(numeros[3]);
// console.log(numeros);
// console.log(palabras[0]+palabras[3]);
// console.log(palabras);

// console.log(`La palabra "${palabras[3]}" tiene un tamaño de ${palabras[3].length} letras`)

let number = 4;
// pregunta si es un array y devuelve un boolean
// console.log(Array.isArray(number));
// console.log(Array.isArray(numeros));

// console.log(numeros);
// eliminar el primer elemento del array y devuelve ese valor
// numeros.shift()
// eliminamos el ultimo elemento del array
// numeros.pop()

// AÑADIR 2 ELEMENTOS

// push: añade uno o mas elementos al final de array y devuelve la nueva longitud
// console.log(numeros);
// let newLength = numeros.push(6); /* longitud del elemento */
// console.log(newLength);
// console.log(numeros);

// unshift: añade uno o mas elementos al principio del array y devuelve su longitud
// console.log(numeros);
// let newLength2 = numeros.unshift(0); /* longitud del elemento */
// console.log(numeros);
// console.log(newLength2);

// indexOf: sirve para buscar un elemento en el array y devuelve su posicion
// console.log(numeros.indexOf(2));
// console.log(numeros.indexOf(7));

// indexOf: sirve para buscar un elemento en el array y devuelve su posicion, pero al reves
// console.log(numeros.lastIndexOf(1));

// reverse: invierte el array
// console.log(numeros.reverse());

// join: pone un separador string, el que queramos reemplazando las comas
// console.log(numeros.join('|'));

// splice: cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
console.log(numeros);
numeros.splice(3);/* eliminara los nros desde esta posicion */
numeros.splice(2,2);/* se ira a la pos 2, tomara 2 elementos y los elimina */
// splice(a,b,c): a=pos a eliminar, b=nums a eliminar, c numeros a añadir seguidos de come (a,b,c1,c2,c3)
numeros.splice(2,3,10,11,12); /* elimina 2 elementos, y mete 10 en la pos 2, si b vale 0 añade elementos apartir de la posicion a */
console.log(numeros);

// slice(): copia nuestro array.
let newNumbers = numeros.slice(2,4);/* slice(a) toma en cuenta desde la pos a, slice(a,b) toma en cuenta desde la pos a hasta la pos b(notoma esta pos) */
console.log(numeros);
console.log(newNumbers);