const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');

/* input.addEventListener('keyup', (e) => {
    // target hace referencia al punto donde se origina el evento
    // console.log(e.target.id); para obtener el id del evento

}); */

/* button.addEventListener('click', (e) =>{
    console.log(e);
}); */

/* const gallery = document.getElementById('gallery');

gallery.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    e.target.classList.toggle('red');
}) */

form.addEventListener('submit', (e) => {
    e.preventDefault() /* el formulario no hace lo que tiene predefinido hacer */
    console.log('El formulario se ha enviado');
});

button.addEventListener('click', (e) => {
    input.value = 'has hecho click'
});

const link = document.getElementById('link');

link.addEventListener('click', (e) => {
    e.preventDefault();
    button.click()/* formzamos a que el evento suceda */
});

