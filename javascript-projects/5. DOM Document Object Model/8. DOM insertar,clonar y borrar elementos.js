const list  = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "i´m a new element"

// inserta el elemento antes del elemento de referencia
// list.insertBefore(newElement, list.children[1])

// SOPORTE TOTAL
// list.children[0].insertAdjacentElement('beforebegin',newElement)
// list.insertAdjacentElement('afterbegin',newElement) /* lo coloca como primer hijo */
// list.insertAdjacentElement('beforeend',newElement) /* se coloca al final */
// list.children[0].insertAdjacentElement('afterend',newElement) /* se coloca despues de q acabe */

// list.children[1].insertAdjacentHTML('afterend','<li>Elementos con HTML</li>')
// list.children[1].insertAdjacentText('afterend','<li>Elementos con HTML</li>')

// REEMPLAZAR UN HIJO CON OTRO
// list.replaceChild(newElement,list.children[1])


// document.getElementById('child-to-replace').replaceWith(newElement)

// CLONAR Y ELIMINAR ELEMENTOS
// list.after(list.cloneNode(true))/* si pasamos true clona la lista y sus hijos,con false solo el elemento clonado */
// list.remove() /* eliminamos el nodo */
list.removeChild(list.children[0]) /* eliminamos un hijo especifico del elemento */