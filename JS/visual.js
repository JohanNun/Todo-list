let guardar = document.querySelector('#btnFiltrar');
let inputTarea = document.querySelector('#introTarea');
let inputPrioridad = document.querySelector('#prioridad')

guardar.addEventListener('click', recogerTarea);

function recogerTarea(event) {
    event.preventDefault();

    let tarea = inputTarea.value;
    let prioridad = inputPrioridad.value;


    if (tarea != "" && prioridad != "") {
        addEvento(tarea, prioridad);
    }
    else {
        alerta.style.display = "block";
    }

    inputTarea.value = "";
    inputPrioridad.value = "";
}





function eliminarTarea(event) {
    event.preventDefault();

    event.target.parentNode.parentNode.remove();
    let borrarId = event.target.parentNode.id;
    let posicion = listaTarea.findIndex(tarea => {
        tarea.id == borrarId;
    })

    listaTarea.splice(posicion, 1);
}

