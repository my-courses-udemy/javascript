
const pendingTasks = document.getElementById('pending-tasks');
const finishedTasks= document.getElementById('finished-tasks');

pendingTasks.addEventListener('dragstart', (e) => {
    /* 
        dataTransfer
        setData: Estaglce la info que queremos compartir
        getData: infor que queremos obtener
    */
    e.dataTransfer.setData('text/plain', e.target.id);
    // console.log(e.dataTransfer.getData('text'));
})

pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active');
})

pendingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active');
})

// OBLIGATORIO, sino no funciona
finishedTasks.addEventListener('dragover', (e) => {
    e.preventDefault();
});

finishedTasks.addEventListener('drop', (e) => {
    e.preventDefault();
    const idElemento = e.dataTransfer.getData('text');
    const elemento = document.getElementById(idElemento);
    elemento.classList.remove('active')
    finishedTasks.appendChild(pendingTasks.removeChild(elemento))
})


finishedTasks.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
})

finishedTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active');
})

finishedTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

pendingTasks.addEventListener('dragover', (e) => {
    e.preventDefault();
})

pendingTasks.addEventListener('drop', (e) => {
    e.preventDefault();
    const idElemento = e.dataTransfer.getData('text');
    const elemento = document.getElementById(idElemento);
    elemento.classList.remove('active');
    pendingTasks.appendChild(finishedTasks.removeChild(elemento));
})