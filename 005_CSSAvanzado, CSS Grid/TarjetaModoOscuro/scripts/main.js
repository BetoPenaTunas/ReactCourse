const btn=document.getElementById('primary')
const body=document.body    /* Obtenemos el objeto BODY */


/* --->PERSISTENCIA DEL TEMA <--- */
/* Haciendo que el THEMA que el USUARIO QUIERA, Persista ya sea OSCURO o LIGHT*/
const themeLocal=localStorage.getItem("theme") /* Si es la primera VEZ, esto no va a estar definido */

if(themeLocal==="dark"){    /* Si el usuario guardó el tema oscuro */
    body.classList.add("dark") /* Se agrega la lista al BODY, para que sea OSCURO */
}



/* const body=document.getElementsByTagName('body') */ /* Manera alternativa */
btn.addEventListener("click",()=>{
    /* classList == Lista de Clases, por que recordemos 
        que un ELEMENTO PUEDE TERNER VARIAS CLASES
    */
    body.classList.toggle('dark')   /* Toogle: QUITA Y PONE UNA PROPIEDAD, Si la tiene o no RESPECTIVAMENTE */

    
    let currentTheme="light"    /* La variable es la que cambia el TEMA */
    if(body.classList.contains("dark")){
        currentTheme="dark"
    }

    localStorage.setItem("theme",currentTheme)

})
