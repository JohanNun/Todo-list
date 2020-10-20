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

        let divMain = document.createElement('div');
        divMain.id = `${id}`;
        divMain.className = "mainTarea";

        let div2 = document.createElement('div');
        div2.className = `tarea ${pPrioridad}`;
        let h3Input = document.createElement('h3');
        h3Input.innerText = `${pInput}`;

        let divEliminar = document.createElement('div');
        divEliminar.className = "eliminar";

        let a = document.createElement('a');
        a.className = `btnEliminar`;
        a.href = "#";
        a.innerText = "Eliminar";
        a.addEventListener('click', eliminarTarea);

        divEliminar.appendChild(a);
        divMain.appendChild(div2);
        div2.appendChild(h3Input);
        divMain.appendChild(divEliminar);
        section.appendChild(divMain);


        alerta.style.display = "none";

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






