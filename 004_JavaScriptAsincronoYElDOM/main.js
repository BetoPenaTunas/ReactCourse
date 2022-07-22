console.log("FUNCIONA")

/* -->VARIABLES      <-- */
/* document.querySelector('.classname') */ /* Se haría así con clases, selecciona el primer elemento que tenga el NOMBRE DE ESA CLASE */
/* Son objetos del DOM */
const formulario=document.querySelector("#formulario")
const texto=document.querySelector('#texto')
const lista=document.querySelector('#lista')
const tareas=[] /* Es bueno tener una fuente de DATOS (o DE VERDAD) SÓLO EN JAVASCRIPT O EN HTML*/
                /* Nunca en AMBOS, por que mantenerlas SINCRONIZADAS es difícil*/


/* -->FUNCIONES      <-- */
const agregarTarea =() =>{
    let nuevaTarea=texto.value
    if(nuevaTarea.length>0 && nuevaTarea/* Si existe */){
        tareas.push(nuevaTarea)
        console.log(nuevaTarea)
    }
    else{
        alert('Texto vacío, intente de nuevo')
        return
    }
    
    /* NOTA: Esto no ES EQUIVALENTE*/
    /* nuevaTarea="" != texto.value */
    /* Nueva tarea sólo es una variable */
    texto.value=""
}

/* Actualiza la lista de TAREAS DEL HTML */
const mostrarTareas=()=>{
    
    /* --> SIN MAP ni JOIN */
    let listContent=""
    /* tareas.forEach((tarea,id)=>{
        listContent+=generarHTML(tarea,id)
    }) */
    
    /* ---> Con MAP y con JOIN <--- */
    
                            /* tarea= elemento auxiliar actual del arreglo que se le pasa a la función*/
                            /* id= indice auxiliar actual del arreglo que se le pasa a la función  */
                            /* JOIN une TODOS los elementos del nuevo arreglo generado por MAP */
    listContent=tareas.map((tarea,id)=>generarHTML(tarea,id)).join(" ")
    console.log(listContent)
    lista.innerHTML=listContent
}
/* Se genera el ITEM de la lista */
const generarHTML=(tarea,id)=>{
    return `<li id="tarea${id}">Tarea: ${tarea}<span onclick="eliminarTarea(${id})" class="material-icons icon">
    close
    </span></li>`
}

const eliminarTarea=(index)=>{
    console.log("Eliminando...")
    tareas.splice(index,1) /* index=se elimina a partir de esa posición, 1=se elimina un elemento */
    mostrarTareas()

}

/* -->EVENT LISTENER <-- */

/* Listener que quita el event por DEFECTO que es REFRESH */
formulario.addEventListener('submit',(event)=>{ /* event --> Es una referencia al EVENTO */
    event.preventDefault()  /* Con esto se quita el evento por defecto */
    agregarTarea()
    mostrarTareas()
})

/* ---> EJEMPLO DE setTimeOut() <---*/
const testSetTimeOut=()=>{
    setTimeout(()=>{
        alert("Test Set Time Out")
    },2000)
}

/* ---> EJEMPLO DE setInterval() */

const testSetInterval=()=>{
    setInterval(()=>{
        alert("Test Set Interval")
    },2000)
}