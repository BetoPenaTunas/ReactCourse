import React, { useEffect,useState } from 'react'
import ResetDadState from './components/ResetDadState';
import User from './components/User';

const Fetch = () => {
  // *---> HACIENDO UN FETCH EN REACT<---
    //Se necesita un "state" para almacenar lo que se va a DESCARGAR 
    // const [user, setuser] = useState([]) //La API descargará un ARREGLO de USUARIOS
    //Será un arreglo vacío, el valor inicial 

    // El FETCH se puede hacer con un EVENTHANDLER o 
    // simplemente al ejecutar una función   
    
    const [users, setusers] = useState([]) //Arreglo vacío por que no tenemos datos de la API
    
    useEffect(()=>{
        const getData = async () =>{
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await res.json()
                setusers(data)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    },[] );    //Si no se le pone segundo Parámetro a usseEffect "[]", 
                //habrá un ciclo infinito en las PETICIONES GET, ya que siempre se renderizará 
               /* Si el arreglo está vacío, LA FUNCIÓN  SÓLO SE EJECUTARÁ 1 VEZ*/
    return (
    <>
      <ResetDadState users={users} setusers={setusers}/>
      <h1>Fetch</h1>
      <section>
        {users.map(({id,name,email})=>(
          <User key={id} id={id} name={name} email={email}></User>
        )
        )}
      </section>
      
    </>

  )
}

export default Fetch