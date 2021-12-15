// FOR IN
// toma el indice del array, no es como python

// FOR OF
// toma los valores de cada array.

let names = ['Paco','Jose','Paula','Maria'];

for (let name of names) {
    console.log(name);
}

for (let index in names) {
    console.log(index);
}

// continue: salta la condicion
// break: rompe el bucle y pasa a la sig linea