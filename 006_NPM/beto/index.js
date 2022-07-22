console.log("Hola!")


/* --->AXIOS ES UNA ALTERNATIVA A FETCH <---- */
/* Axios es una OPTIMIZACIÓN de FETCH */
const axios=require('axios')
// console.log(axios)

// --->Haciendo como un FETCH pero con promesas<----
axios.get('https://api.breakingbadquotes.xyz/v1/quotes')
.then(
    response=>{
        // console.log(response.data)
        console.log(`Quote: ${response.data[0].quote}\nAuthor: ${response.data[0].author}`)
    }
)

/* Para ocupar ASYNC/AWAIT se debe tener una FUNCIÓN FORZOSAMENTE*/
/* ASYNC/AWAIT Haciendo lo mismo de la línea 1 a 17 pero con ASYNC/AWAIT */
const getData=async()=>{

    const url="https://api.breakingbadquotes.xyz/v1/quotes"
    const response  =await axios.get(url)
    console.log(`Quote: ${response.data[0].quote}\nAuthor: ${response.data[0].author}`)

}

/* getData() */ /* Descomentar para ver que con ASYNC/AWAIT funciona igual */