const contenedor= document.querySelector('#contenedor')
const button=document.getElementById('appear')

/* -->LLAMANDO A API de forma ASÍNCRONA<--- */
const llamarAPI= async () =>{
    /* fetch() Trae INFO de APIs a través de una URL */
    /* FETCH retorna una promesa */
    /* Await es como un sustituto de .THEN */
    const res= await fetch('https://rickandmortyapi.com/api/character/?page=1') 
    
    /* Se tiene que castear el resultado de la RESPUESTA a un JSON */
    const data= await res.json()    /* .json retorna una promesa también */

    console.log(data)
    const personajes=data.results
    let dataHTML=personajes.map(personaje=>generarTarjeta(personaje)).join(" ")
    contenedor.innerHTML=dataHTML;

}

/* El proceso ya no es ASÍNCRONO por que es INFO que ya tengo */
const generarTarjeta =({image,name})=>{

    return `<section>
    <img src="${image}" alt="name">
    <h3>${name}</h3>
    </section><br><br>`;

}

button.addEventListener("click",llamarAPI)
