const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes','sabado','domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');

// // CREAR UN ELEMENTO
// const itemList = document.createElement('li');
// // ESCRIBIR TEXTO EN UN ELEMENTO
// itemList.textContent = 'lunes';
// // AÑADIR UN ELEMENTO
// daysList.appendChild(itemList);

// INNER HTML SE USA EN ESTE CASO, porque deseamo insertar etiquetas en este texto
title.innerHTML = 'DOM <span>crear e insertar elementos</span>'

// tener que insertar varias etiquetas a nuestro DOM, usamos esto
const fragment = document.createDocumentFragment()
// FORMA BUENA
for (const day of days) {
    const itemList = document.createElement('li')
    itemList.textContent = day
    fragment.appendChild(itemList)
}
daysList.appendChild(fragment)

const itemSelect = document.createElement('option')
itemSelect.setAttribute('value','hello world')/* en el atributo value ponemos x texto */
itemSelect.textContent = 'Hello World'
selectDays.appendChild(itemSelect)

const fragment2 = document.createDocumentFragment()
for (const day of days){
    const selecItem = document.createElement('option')
    selecItem.setAttribute('value',day.toLowerCase())
    selecItem.textContent =  day
    fragment2.appendChild(selecItem)
}
selectDays.appendChild(fragment2)

// MANERA MALA
// for (const day of days) {
//     daysList.innerHTML += `<li>${day}</li>`
// }