const title = document.getElementById('title');
const name = document.getElementById('name');


// tomamos el valor del elemento(o etiqeuta)
// console.log(name.getAttribute('type'));

// podemos modificar los atributos de un id
// name.setAttribute('type','date');

// podemos añadir clases a un elemento
// title.classList.add('main-title', 'other-title');

// para remover clases
// title.classList.remove('main-title');  

// comprobar si la clase existe
// if (title.classList.contains('ti')) console.log('Title tiene la clase title')
// else console.log('title no tiene la clase title')

// .replace(a,b) Reemplaza la clase a con la clase b
// title.classList.replace('title','main-title');

// No devueven lo mismo
// console.log(title.innerHTML);/* recoje todo hasta con etiquetas */
// console.log(title.textContent);/* recoje solamente el texto plano */

console.log(name.value.length);

// console.log(title);
// console.log(name);