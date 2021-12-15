const button = document.getElementById('button');

// cuando hacemos click
/* button.addEventListener('click', () => {
    console.log('CLICK');
}); */

// cuando hacemos doble click
button.addEventListener('dblclick', () => {
    console.log('DOBLE CLICK');
});

const box = document.getElementById('box');

// si el mouse entra en cierto elemento podemos hacer que pase algo
box.addEventListener('mouseenter', () => {
    box.classList.replace('red','green');
});

// si el mouse sale de cierto elemento, podemos hacer que pase algo
box.addEventListener('mouseleave', () => {
    box.classList.replace('green','red');
});

// cuando pulsamos el boton izquierdo del raton
/* box.addEventListener('mousedown', () => {
    console.log('HAS PULSADO EN LA CAJA');
}); */

// cuando soltamos el boton izquiero del raton
/* box.addEventListener('mouseup', () => {
    console.log('HAS SOLTADO EL BOTON IZQUIERDO EN LA CAJA');
}); */

// cuando mueves el boton en determinado lugar es detectado asi
/* box.addEventListener('mousemove', () => {
    console.log('ESTAS MOVIENDO EL RATON EN LA CAJA');
}); */

const input = document.getElementById('input')

// detecta cuando se pulsa una tecla(cualquiera)
input.addEventListener('keydown', () => {
    console.log('HAS PULSADO UNA TECLA');
});

// cuando soltamos una tecla
input.addEventListener('keyup', () => {
    console.log('SOLTASTE UNA TECLA');
});

// cuando pulsamos una tecla sin soltar
input.addEventListener('keypress', () => {
    console.log('ESTAS PULSANDO UNA TECLA');
});