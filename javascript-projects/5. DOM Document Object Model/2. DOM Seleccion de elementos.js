// LAS ID´S LAS USAMOS PARA JAVASCRIPT, NO CSS

// Acceder a un elemento a traves de su id
const title = document.getElementById('title');
// console.log(title);

// nos permite leer o editar el titulo
// title.textContent = 'DOM - Accediendo a Nodos. Hola Santihs';

// Accede al primero elemento que coincida con el selector CSS
// const paragraph = document.querySelector('.paragraph:nth-child(3)');/* tambien podemos acceder, a las distintas etiquetas que tengan la clase paragraph */
// const paragraph = document.querySelector('.paragraph');
// podemos acceder a un elemento(etiqueta) de la clase paragraph de 2 formas 
// const span = paragraph.querySelector('span');
// const span = document.getElementById('title').querySelector('span');

// console.log(paragraph);
// console.log(span.textContent);


// ACCEDEMOS A TODOS LOS ELEMENTOS CON LA CLASE PARAGRAPH
// const paragraph = document.querySelectorAll('.paragraph')
// const paragraphSpread = [...document.querySelectorAll('.paragraph')];

// paragraphSpread.map(p=>p.style.color = 'blue')

// console.log(paragraph);