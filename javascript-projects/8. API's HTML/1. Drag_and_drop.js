

const smile = document.getElementById('smile');
const drop_zone = document.getElementById('drop-zone');


/*  dragstart: cuando se empieza a arrastrar
    drag: cuando se esta arrastrando
    dragend: cuando se termina de arrastrar
*/
smile.addEventListener('dragstart', () => {
    console.log("Drag start");
});

/* 
    dragenter: cuando el objeto entra en la zona destino
    dragover: cuando movelos el objeto dentro de la zona
    drop: cuando soltamos el objeto en la zona de destino
    dragLeave: se dispara cuando el objeto sale de la zona
*/
drop_zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log("Drag Over")
})

drop_zone.addEventListener('drop', (e) => {
    e.preventDefault();
    console.log("drop")
})


drop_zone.addEventListener('dragLeave', (e) => {
    e.preventDefault()
    console.log("Drag Leave")
})