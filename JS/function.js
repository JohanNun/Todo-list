const listaTarea = new Array(
    {
        id: 1,
        titulo: 'Estudiar Javascript',
        prioridad: 'urgente'
    },
    {
        id: 2,
        titulo: 'Sacar el perro',
        prioridad: 'diaria'
    },
    {
        id: 3,
        titulo: 'Comer empanadas',
        prioridad: 'mensual'
    }
)

let id = 4;


const section = document.querySelector('#segundoFiltro');
const alerta = document.querySelector('.alerta');


function printEvento(pInput, pPrioridad) {

    const resultado = pInput;
    const prioridad = pPrioridad;

    if (resultado != "") {
        section.innerHTML += `<div id=${id} class="mainTarea">
        <div class="tarea ${pPrioridad}">
            <h3>${pInput}</h3>
        </div>
        <div class="eliminar">
        <a class="btnEliminar" href="#">Eliminar</a>
        </div>
    </div>`
        alerta.style.display = "none";

        let btnEliminar = document.querySelector('.btnEliminar');
        btnEliminar.addEventListener('click', eliminarTarea);
    }

}

function addEvento(pInput, pPrioridad) {

    const nuevaTarea = {
        id: id,
        titulo: pInput,
        prioridad: pPrioridad
    }


    let existe = listaTarea.findIndex(tarea => {
        return listaTarea.titulo == pInput && listaTarea.prioridad == pPrioridad;
    })

    if (existe == -1) {
        listaTarea.push(nuevaTarea);
        printEvento(pInput, pPrioridad);
        id++;
    }

}






