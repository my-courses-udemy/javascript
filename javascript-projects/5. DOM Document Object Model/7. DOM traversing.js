const parent = document.getElementById('parent')

// PADRES
// parentNode
// console.log(parent.parentNode)
// parentElement
// console.log(parent.parentElement) /* Devuelven lo mismo */

// HIJOS
// devuelve los nodos
// console.log(parent.childNodes)
// devuelve los elementos
// console.log(parent.children)
// devuelve el primer Nodo (un salto de linea)
// console.log(parent.firstChild)
// devuelve el primer elemento
// console.log(parent.firstElementChild)
// devuelve el ultimo Nodo (un salto de linea)
// console.log(parent.lastChild)
// devuelve el ultimo elemento
// console.log(parent.lastElementChild)
// devuelve true o false de acuerdo a si el nodo tiene hijos
// console.log(parent.firstChild.hasChildNodes())/* podemos saber si tiene nodos descendientes */

// HERMANOS
// nos devuelve el siguiente Nodo hermano
// console.log(parent.parentElement.nextSibling)/* en este caso buscamos el hermanos de su padre */
// nos devuelve el siguiente Elemento hermano
// console.log(parent.parentElement.nextElementSibling)/* en este caso buscamos el hermanos de su padre */
// nos devuelve el anterior Nodo hermano
console.log(parent.parentElement.previousSibling)/* en este caso buscamos el hermanos de su padre */
// nos devuelve el anterior Elemento hermano
console.log(parent.parentElement.previousElementSibling)/* en este caso buscamos el hermanos de su padre */
