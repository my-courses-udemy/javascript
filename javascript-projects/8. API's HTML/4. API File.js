

const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');

fileInput.addEventListener('change', ( e ) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener('progress', (e2) => {
        progress.style.width = Number.parseInt(e2.loaded * 100 / e2.total) + '%';
    })
    
    fileReader.addEventListener('loadend', (e3) => {
        // console.log('100');
        progress.style.width = '100%';
    })
})