import ReactDOM from 'react-dom'
import { useState } from 'react'
import { ToDo } from './ToDo'
import {nanoid} from 'nanoid'
export const App = () => {
  const initialState = [
    {id:"0", activity:"Read Book 1"},
    {id:"1", activity:"Read Book 2"},
    {id:"2", activity:"Read Book 3"}
  ] 

  //* ----->TO DO LIST CON CONTROLLED COMPONENTS(state + onChange)<-----

  /* ----->'ESTADOS'<-----*/
  /* El componente App.jsx tiene estos 2 estados */
  /* toDo== LISTA DE TO-DOS */
  const [toDo, settoDo] = useState(initialState) //Estado inicial de la Lista 
  const [newToDo, setNewToDo] = useState("")     //Estado inicial de una nueva Tarea

  const handlerChange = (e)=>{
    /* 
        "e" --> Tiene info del EVENTO 
        "e.target" --> Se refiere a una REFERENCIA Al INPUT o ELEMENTO(Etiqueta o Target HTML) donde el EVENT se ENCUENTRA
        "e.target.value" --> Valor de la INPUT 
    */
    console.log(e.target); 
    console.log(e.target.value); 
    let newAct=e.target.value;
    
    //El estado de newToDo INICIAL era = ""
    //Ahora newToDo="newAct" por cada cambio en la entrada
    //Ir a consola del navegador>Components y click en App para VER el efecto
    setNewToDo(newAct); 

    /* console.log(nanoid(3));  */ /* Con esto se genera un ID ALFANUMÉRICO aleatorio, si se le pasa un argumento indicará el número de caracteres del ARRAY */
  }

  /* Evita que se REFRESQUE EL FORMULARIO */
  const handlerForm = (e)=>{
    e.preventDefault()

    /* 
      Se genera un nuevo OBJETO 
      Se añade el nuevo objeto junto con el toDo con los 3 puntos (Como una concatenación)
      Y se actualiza el estado del "initialArray" mediante "setToDo", a su VEZ se renderiza 
    */
    settoDo([{id:nanoid(3),activity:newToDo},...toDo])
    setNewToDo("")  /* Vaciando el valor de la INPUT */
    
  }

  //* ----->DELETING TO DO <-----
  /* Se ocuparon funciones flecha */
  /* Esta función se debe PASAR al Componente ToDo para que se EJECUTE desde dicho componente */
  const deletTodo=id=>settoDo(toDo.filter(element=>(element.id !== id)))


  //* ----->EDITING TO DO<-----
  const editToDo = (id) =>(
    setNewToDo(toDo.find(element=>element.id===id).activity)
  )

  return (

    <main>
        {/* Con el manejador de onSubmit quiere 
            EVITAR QUE LA PÁGINA SE REFRESQUE
        */}
        <form onSubmit={handlerForm}>
            {/* "onChange: Al cambiar la entrada ejecuta la función "handleChange" 
                y el estado "newToDo" cambia también y se asigna a value            
            */}
            <input type="text" onChange={handlerChange} value={newToDo}/>
        </form>

        <section>

            {
              //Operador ternario para saber si se pintan los elementos de la LISTA
              //o si se imprime "SIN TAREAS"
              toDo.length>0?
              toDo.map(({id,activity})=>(
                <ToDo 
                  key={id} 
                  id={id} 
                  toDo={activity} 
                  fnToDelete={deletTodo} 
                  fnToEdit={editToDo}
                />
              )): 
              <h3>Sin Tareas</h3>
            }
        </section>
    </main>

  )
}


