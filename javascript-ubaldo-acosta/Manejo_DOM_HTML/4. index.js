const days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

const title = document.getElementById('title');
const daysList = document.getElementById('daysList')
const daysSelect = document.getElementById('daysSelect')

// creamos un elemento
/* const itemList = document.createElement('li')
itemList.textContent = 'Lunes'; // añade texto */

title.innerHTML = 'Crear e Insertar Elementos <i>en el DOM</i>'; // añade etiquetas html

// daysList.appendChild(itemList);

const fragment = document.createDocumentFragment();

for (const day of days) {
    const item = document.createElement('li')
    item.textContent = day;
    fragment.appendChild(item);
}

daysList.appendChild(fragment);

const fragment2 = document.createDocumentFragment();
for (const day of days) {
    const item = document.createElement('option')
    item.setAttribute('value', day.toLowerCase())
    item.textContent = day;
    fragment2.appendChild(item)
}
daysSelect.appendChild(fragment2)