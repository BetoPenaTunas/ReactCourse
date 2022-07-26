import { useState } from "react"

const CountValue = ({ count }: { count: number }) => {

    console.log("Me estoy ejecutando")
    return <div>La cuenta actual es: {count}</div>
}

const Counter = () => {
    
    const styles={ color: "black", backgroundColor: "lightblue", margin: "3rem", padding: "2rem" }
    

    // Los estados son independientes entre sí
    // count = valor inicial
    // setCount = función que actualiza el ESTADO de count y re-renderiza(renderar)
    // se re-renderiza por que index.jsx llama a Counter y este llama a CountValue

    const [count,setCount]=useState(0)  //Cada estado es independiente uno del otro
    const [count2,setCount2]=useState(10)
    return(
    <>
        <div style={styles}>
            {
                //
            }
            <h1>Counter</h1>
            <button onClick={()=>setCount(count+1)}>SUMAR 1</button>
            <CountValue count={count}/>
            <button onClick={()=>setCount2(count2+1)}>SUMAR 2</button>
            <CountValue count={count2}/>
        </div>
    </>);
}
export default Counter;