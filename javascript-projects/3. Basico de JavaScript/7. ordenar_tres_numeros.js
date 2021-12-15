// document.getElementById(ID): SIRVE PARA PODER USAR el id de una etiqueta en html
const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

// prompt(): LLAMAMOS A UN VENTANA DE NUESTRO SITIO WEB
let a = prompt('Introduzca el primer numero: ');
let b = prompt('Introduzca el segundo numero: ');
let c = prompt('Introduzca el tercer numero: ');

// textContent: SIRVE PARA CAMBIAR EL TEXTO DE NUESTRA ETIQUETA
numbers.textContent = `Los numeros introducidos son: ${a}, ${b}, y ${c}`;

if (a>=b && a>=c) {
    if(b>=c){
        result.textContent = `El orden es: ${a}, ${b} y ${c}`;
    }
    else{
        result.textContent = `El orden es: ${a}, ${c} y ${b}`;
    }
}
else if(b>=a && b>=c){
    if(a>=c){
        result.textContent = `El orden es: ${b}, ${a} y ${c}`;
    }
    else{
        result.textContent = `El orden es: ${b}, ${c} y ${a}`;
    }
}
else if(c>=a && c>=b){
    if(a>=b){
        result.textContent = `El orden es: ${c}, ${a} y ${b}`;
    }
    else{
        result.textContent = `El orden es: ${c}, ${b} y ${a}`;
    }
}