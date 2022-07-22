const creteCounter=()=>{
    let count=0 /* Este valor sólo se inicializa una vez */
                /* A la primer llamada de la función, no en cada llamada */
                /* Ver el DEBUGGER para comprobar */
    return ()=>{
        const current=count
        console.log("En la función: "+count)
        count+=1
        return current
    }
}

debugger;
const c= creteCounter()

console.log(c())
console.log("\n----------------------\n")
console.log(c())
console.log("\n----------------------\n")
console.log(c())

