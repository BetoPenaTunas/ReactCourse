/* 
    Estamos creando un componente que será utilizado
    en App.jsx. 

    User ya será una etiqueta que podremos ocupar 
    en App.jsx
*/
const User =(props)=>{
    return (
        <div>
            Hello {props.name}
        </div>
    );
}

export default User