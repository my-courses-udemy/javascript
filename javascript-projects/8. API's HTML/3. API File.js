

const fileInput = document.getElementById('file');
const img = document.getElementById('img');
const text = document.getElementById('text');
const images = document.getElementById('imgs')

// FORMA DE AÑADIR EL TEXTO DE UN ARCHIVO .*
/* fileInput.addEventListener('change', (e) => {
    // console.log(e.target.files);
    const file = e.target.files[0];
    // console.log(file);
    const fileReader = new FileReader();
    fileReader.readAsText(file)
    // se lee cuando el archivo esta cargado
    fileReader.addEventListener('load', ({target}) => {
        // console.log(e.target.result);
        text.textContent = target.result;
    })
}) */


// CARGA DE UNA SOLA IMAGAEN
/* fileInput.addEventListener('change', (e) => {
    // console.log(e.target.files);
    const file = e.target.files[0];
    // console.log(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    // se lee cuando el archivo esta cargado
    fileReader.addEventListener('load', ({ target }) => {
        // console.log(target.result);
        img.setAttribute('src', target.result)
    })
}) */


fileInput.addEventListener('change', (e) => {
    // console.log(e.target.files);
    const files= Object.values(e.target.files);
    // console.log(files)
    const fragment = document.createDocumentFragment();
    files.map( file => {
        const fileReader = new FileReader();
        const img2 = document.createElement('img');
        fileReader.readAsDataURL(file)
        // se lee cuando el archivo esta cargado
        fileReader.addEventListener('load', ({ target }) => {
            console.log(target.result);
            img2.setAttribute('src', target.result)
        })
        fragment.appendChild(img2);
    })
    images.appendChild(fragment);
})
