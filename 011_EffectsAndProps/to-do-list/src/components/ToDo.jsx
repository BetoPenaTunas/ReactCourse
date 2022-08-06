import React from 'react'

//Se pasa la función fnToDelete
export const ToDo = ({id,toDo, fnToDelete,fnToEdit}) => {
  return (
    // Prestar atención a fnToDelete()
    // Se está ejecuntando con una función ANÓNIMA () => fnToDelete()
    // Se podría ejecutar sólamente colocando "fnToDelete", el problema es que tiene un PARÁMETRO 
    <p>{id} -- {toDo} <button onClick={()=>fnToDelete(id)}>X</button> <button onClick={()=>fnToEdit(id)}>EDT</button></p>
  )
}
